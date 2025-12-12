
/**
 * Magic Text Reveal - Particle System
 * Ported from React component to Vanilla JS
 */

class MagicText {
    constructor(element) {
        this.container = element;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        // Config defaults
        this.text = element.dataset.text || "Magic Text";
        this.fontSize = parseInt(element.dataset.fontSize) || 60;
        this.fontFamily = "Inter, sans-serif";
        this.fontWeight = 800; // Bold for headers
        this.color = element.dataset.color || "rgba(0, 0, 0, 1)";

        // Physics params
        this.spread = 40;
        this.speed = 0.5;
        this.density = 4; // Lower is denser in this logic (transformedDensity)

        this.particles = [];
        this.isHovered = false;
        this.showText = false;
        this.rafId = null;
        this.lastTime = performance.now();

        // Setup DOM
        this.setupDOM();
        this.bindEvents();

        // Init
        this.resize();
        this.initParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    setupDOM() {
        // Clear container and style it
        this.container.innerHTML = '';
        this.container.style.position = 'relative';
        this.container.style.display = 'inline-flex';
        this.container.style.alignItems = 'center';
        this.container.style.justifyContent = 'center';
        this.container.style.cursor = 'default'; // Or pointer

        // Canvas styling
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none'; // Let mouse pass through to container

        // Text overlay (hidden initially, shown on hover/state)
        this.textEl = document.createElement('div');
        this.textEl.innerText = this.text;
        this.textEl.style.color = this.color;
        this.textEl.style.fontFamily = this.fontFamily;
        this.textEl.style.fontWeight = this.fontWeight;
        this.textEl.style.fontSize = `${this.fontSize}px`;
        this.textEl.style.opacity = '0'; // Start hidden
        this.textEl.style.transition = 'opacity 0.2s ease';
        this.textEl.style.position = 'relative'; // Keeps container size
        this.textEl.style.zIndex = '1';
        // Make text transparent but taking up space effectively? 
        // Actually the design creates particles FROM the text.
        // We need the container to have size. 
        // Strategy: Use this text element to define the size of the container, but make it invisible.
        this.textEl.style.visibility = 'hidden';

        // Real visible text for hover state
        this.visibleText = this.textEl.cloneNode(true);
        this.visibleText.style.position = 'absolute';
        this.visibleText.style.visibility = 'visible';
        this.visibleText.style.opacity = '0';
        this.visibleText.style.top = '50%';
        this.visibleText.style.left = '50%';
        this.visibleText.style.transform = 'translate(-50%, -50%)';
        this.visibleText.style.whiteSpace = 'nowrap';

        this.container.appendChild(this.textEl); // Ghost for size
        this.container.appendChild(this.canvas);
        this.container.appendChild(this.visibleText);

        // Also ensure container has dimensions
    }

    bindEvents() {
        this.container.addEventListener('mouseenter', () => {
            this.isHovered = true;
        });

        this.container.addEventListener('mouseleave', () => {
            this.isHovered = false;
        });
    }

    resize() {
        const rect = this.container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);

        // Re-init particles on resize
        if (this.particles.length > 0) {
            this.initParticles(); // Ideally debounce this
        }
    }

    initParticles() {
        const rect = this.container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Create temp canvas for text sampling
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tCtx = tempCanvas.getContext('2d');

        tCtx.fillStyle = 'rgba(255, 255, 255, 1)'; // Alpha matters for detection
        tCtx.font = `${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
        tCtx.textAlign = 'center';
        tCtx.textBaseline = 'middle';
        tCtx.fillText(this.text, width / 2, height / 2);

        const imageData = tCtx.getImageData(0, 0, width, height);
        const data = imageData.data;

        this.particles = [];
        const gap = 6 - this.density; // Sampling gap

        for (let y = 0; y < height; y += gap) {
            for (let x = 0; x < width; x += gap) {
                const index = (y * width + x) * 4;
                const alpha = data[index + 3];

                if (alpha > 0) {
                    // It's a text pixel
                    const originalAlpha = alpha / 255;

                    this.particles.push({
                        x: x + (Math.random() - 0.5) * 5, // Slight jitter
                        y: y + (Math.random() - 0.5) * 5,
                        originX: x,
                        originY: y,
                        color: this.color, // Simplified color handling
                        alpha: originalAlpha,

                        // Physics props
                        vx: 0,
                        vy: 0,
                        floatingAngle: Math.random() * Math.PI * 2,
                        floatingSpeed: Math.random() * 2 + 1,

                        // Sparkle
                        currentAlpha: originalAlpha * 0.3,
                        targetAlpha: Math.random() * originalAlpha,
                        sparkleSpeed: Math.random() * 0.1 + 0.05
                    });
                }
            }
        }
    }

    animate() {
        const now = performance.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.update(dt);
        this.draw();

        this.rafId = requestAnimationFrame(() => this.animate());
    }

    update(dt) {
        const FADE_SPEED = 5;
        const RETURN_SPEED = 5;
        const FLOAT_AMOUNT = this.spread; // Using spread for float radius

        this.particles.forEach(p => {
            if (this.isHovered) {
                // Return to origin (form text) logic, or fade out logic?
                // The React code fades out particles and shows standard text on hover.

                p.currentAlpha -= FADE_SPEED * dt;
                if (p.currentAlpha < 0) p.currentAlpha = 0;

                // Also move back to origin just in case
                p.x += (p.originX - p.x) * RETURN_SPEED * dt;
                p.y += (p.originY - p.y) * RETURN_SPEED * dt;

            } else {
                // Formatting Text / Floating state
                // Actually the prompt implies it STARTS dispersed or floating and looks cool? 
                // "titles and headers to be highlighted and appearing special"

                // Let's match the reference effect: Float around origin

                p.floatingAngle += dt * p.floatingSpeed;

                const targetX = p.originX + Math.cos(p.floatingAngle) * 3; // Small float radius
                const targetY = p.originY + Math.sin(p.floatingAngle) * 3;

                p.x += (targetX - p.x) * 2 * dt;
                p.y += (targetY - p.y) * 2 * dt;

                // Sparkle
                const diff = p.targetAlpha - p.currentAlpha;
                p.currentAlpha += diff * FADE_SPEED * dt;

                if (Math.abs(diff) < 0.05) {
                    p.targetAlpha = Math.random() * p.alpha;
                }
            }
        });

        // Show/Hide solid text
        if (this.isHovered) {
            this.visibleText.style.opacity = '1';
        } else {
            this.visibleText.style.opacity = '0';
        }
    }

    draw() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.ctx.clearRect(0, 0, w, h);

        // Parse color string to get RGB
        // Assuming rgba or rgb or hex. For simplicity, let's assume rgba/rgb provided in constructor matches format,
        // or just use fillStyle for everything (slower but works).

        // Optimized:
        this.ctx.save();
        // this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio); // Already scaled in resize

        this.particles.forEach(p => {
            if (p.currentAlpha <= 0.01) return;

            // Quick hack for opacity
            // If color is "rgb(0,0,0)", we need to add alpha
            // Better: Let's assume black particles for now or parse it properly

            this.ctx.fillStyle = this.color.replace(')', `, ${p.currentAlpha})`).replace('rgb', 'rgba');
            this.ctx.beginPath();
            this.ctx.rect(p.x, p.y, 1.5, 1.5); // Tiny squares
            this.ctx.fill();
        });

        this.ctx.restore();
    }
}

// Global init function
window.initMagicText = () => {
    const elements = document.querySelectorAll('.magic-text');
    elements.forEach(el => new MagicText(el));
};

// Auto init on load
window.addEventListener('load', window.initMagicText);
