
// SIMPLIFIED Milky Way Experience - Based on working React reference
// Fixed version without ES6 modules, simpler implementation

class SimpleMilkyWay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        // Three.js objects
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.galaxy = null;

        // Interaction state
        this.mouse = { x: 0, y: 0, down: false };
        this.rotation = { x: 0, y: 0 };
        this.zoom = 5;
        this.autoRotate = true;

        // Camera/hand tracking
        this.cameraEnabled = false;
        this.videoElement = null;

        this.init();
    }

    init() {
        if (!window.THREE) {
            console.error('Three.js not loaded');
            this.showError('Three.js library not loaded. Please refresh the page.');
            return;
        }

        this.initScene();
        this.createGalaxy();
        this.setupControls();
        this.animate();

        window.addEventListener('resize', () => this.onResize());
    }

    initScene() {
        const THREE = window.THREE;

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000510);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = this.zoom;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
    }

    createGalaxy() {
        const THREE = window.THREE;
        const galaxyGroup = new THREE.Group();

        // Galaxy core - bright center
        const coreGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const coreMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffaa,
            transparent: true,
            opacity: 0.9
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        galaxyGroup.add(core);

        // Spiral arms particles
        const particleCount = 15000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Spiral calculation
            const radius = Math.random() * 3 + 0.5;
            const angle = Math.random() * Math.PI * 2;
            const spiralAngle = angle + radius * 2;
            const heightVar = (Math.random() - 0.5) * 0.3 * (1 - radius / 3);

            positions[i3] = Math.cos(spiralAngle) * radius;
            positions[i3 + 1] = heightVar;
            positions[i3 + 2] = Math.sin(spiralAngle) * radius;

            // Color (blue to white)
            const colorIntensity = Math.random() * 0.5 + 0.5;
            colors[i3] = colorIntensity * 0.8;
            colors[i3 + 1] = colorIntensity * 0.9;
            colors[i3 + 2] = colorIntensity;
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        galaxyGroup.add(particles);

        // Background stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 3000;
        const starsPositions = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
            starsPositions[i] = (Math.random() - 0.5) * 20;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
        const starsMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xffffff,
            transparent: true,
            opacity: 0.6
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(stars);

        this.galaxy = galaxyGroup;
        this.scene.add(this.galaxy);
    }

    setupControls() {
        const canvas = this.renderer.domElement;

        // Mouse controls
        canvas.addEventListener('mousedown', (e) => {
            this.mouse.down = true;
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.autoRotate = false;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!this.mouse.down) return;

            const deltaX = e.clientX - this.mouse.x;
            const deltaY = e.clientY - this.mouse.y;

            this.rotation.y += deltaX * 0.005;
            this.rotation.x += deltaY * 0.005;

            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        canvas.addEventListener('mouseup', () => {
            this.mouse.down = false;
        });

        canvas.addEventListener('mouseleave', () => {
            this.mouse.down = false;
        });

        // Wheel zoom
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom += e.deltaY * 0.01;
            this.zoom = Math.max(2, Math.min(10, this.zoom));
        }, { passive: false });

        // Touch controls
        let lastTouchDistance = 0;

        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.mouse.down = true;
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
                this.autoRotate = false;
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
            }
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();

            if (e.touches.length === 1 && this.mouse.down) {
                const deltaX = e.touches[0].clientX - this.mouse.x;
                const deltaY = e.touches[0].clientY - this.mouse.y;

                this.rotation.y += deltaX * 0.005;
                this.rotation.x += deltaY * 0.005;

                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (lastTouchDistance > 0) {
                    const delta = distance - lastTouchDistance;
                    this.zoom -= delta * 0.01;
                    this.zoom = Math.max(2, Math.min(10, this.zoom));
                }

                lastTouchDistance = distance;
            }
        }, { passive: false });

        canvas.addEventListener('touchend', () => {
            this.mouse.down = false;
            lastTouchDistance = 0;
        });
    }

    async enableCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user' }
            });

            if (!this.videoElement) {
                this.videoElement = document.createElement('video');
                this.videoElement.className = 'webcam-feed';
                this.videoElement.autoplay = true;
                this.videoElement.playsInline = true;
                document.body.appendChild(this.videoElement);
            }

            this.videoElement.srcObject = stream;
            this.cameraEnabled = true;
            this.updateStatus('✋ Camera active! Move your hand to control. (Mouse still works!)', 'success');

        } catch (error) {
            console.error('Camera error:', error);
            this.updateStatus('📷 Camera denied. No problem! Use mouse/touch controls.', 'warning');
            this.cameraEnabled = false;
        }
    }

    disableCamera() {
        if (this.videoElement && this.videoElement.srcObject) {
            const stream = this.videoElement.srcObject;
            stream.getTracks().forEach(track => track.stop());
            this.videoElement.srcObject = null;
            if (document.body.contains(this.videoElement)) {
                document.body.removeChild(this.videoElement);
            }
            this.videoElement = null;
        }
        this.cameraEnabled = false;
        this.updateStatus('Using mouse/touch controls', 'info');
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.galaxy) {
            // Auto-rotate slowly if not being controlled
            if (this.autoRotate) {
                this.rotation.y += 0.001;
            }

            this.galaxy.rotation.x = this.rotation.x;
            this.galaxy.rotation.y = this.rotation.y;
        }

        // Apply zoom
        this.camera.position.z = this.zoom;

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    onResize() {
        if (!this.camera || !this.renderer || !this.container) return;

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    updateStatus(message, type = 'info') {
        const statusEl = document.getElementById('milky-way-status');
        if (statusEl) {
            statusEl.textContent = message;
            statusEl.className = `milky-way-status status-${type}`;
        }
    }

    showError(message) {
        const statusEl = document.getElementById('milky-way-status');
        if (statusEl) {
            statusEl.textContent = `❌ ${message}`;
            statusEl.className = 'milky-way-status status-error';
        }
    }
}

// Global initialization
window.initMilkyWay = () => {
    const experience = new SimpleMilkyWay('milky-way-container');

    // Bind camera button
    const btn = document.getElementById('start-milky-way-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            if (!experience.cameraEnabled) {
                experience.enableCamera();
            } else {
                experience.disableCamera();
            }

            // Update button text
            btn.textContent = experience.cameraEnabled ? 'Disable Camera' : 'Enable Hand Control';
        });
    }

    // Update initial status
    experience.updateStatus('🖱️ Drag to rotate • Scroll to zoom • Click button for hand control', 'info');
};
