
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { Hands } from 'https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4/index.js';
import { Camera } from 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3/index.js';

class MilkyWayExperience {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Milky Way container not found');
            return;
        }

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.hands = null;
        this.webcam = null;

        // Interaction state
        this.targetRotationX = 0;
        this.targetRotationY = 0;
        this.currentRotationX = 0;
        this.currentRotationY = 0;
        this.isHandDetected = false;

        this.init();
    }

    async init() {
        this.initThreeJS();
        this.createGalaxy();
        this.initMediaPipe();
        this.animate();

        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    initThreeJS() {
        this.scene = new THREE.Scene();
        // Fog for depth
        this.scene.fog = new THREE.FogExp2(0x000000, 0.001);

        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 2000);
        this.camera.position.z = 1000;
        this.camera.position.y = 500;
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
    }

    createGalaxy() {
        const geometry = new THREE.BufferGeometry();
        const count = 50000;

        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const colorInside = new THREE.Color(0xff6030); // Orange/Red core
        const colorOutside = new THREE.Color(0x1b3984); // Blue arms

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Radius
            const radius = Math.random() * Math.random() * 800;
            const spinAngle = radius * 5;
            const branchAngle = (i % 3) * ((2 * Math.PI) / 3);

            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 50;
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 50;
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 50;

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i3 + 1] = randomY + (Math.random() - 0.5) * (radius * 0.2); // Flatten disk
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            // Color
            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, radius / 800);

            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;

            // Size
            sizes[i] = Math.random() * 2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Custom shader material for glowing points
        const material = new THREE.PointsMaterial({
            size: 2,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    initMediaPipe() {
        // Create a video element for the webcam stream (hidden)
        const videoElement = document.createElement('video');
        videoElement.id = 'webcam-input';
        videoElement.style.display = 'none';
        document.body.appendChild(videoElement);

        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults((results) => this.onHandResults(results));

        // Initialize camera
        // Note: Actual camera start should probably be triggered by user action 
        // to comply with browser autoplay policies and permissions.
        // We will expose a method to start it.
    }

    async startExperience() {
        const videoElement = document.getElementById('webcam-input');
        const statusEl = document.getElementById('milky-way-status');
        const btn = document.getElementById('start-milky-way-btn');
        const overlay = document.querySelector('.milky-way-overlay');

        if (this.webcam) return; // Already started

        try {
            if (statusEl) statusEl.innerText = "Requesting camera access... Please click 'Allow'.";

            // Check explicit permissions if supported (optional but good practice)
            // But main logic is try/catch on MediaPipe/GetUserMedia

            this.webcam = new Camera(videoElement, {
                onFrame: async () => {
                    await this.hands.send({ image: videoElement });
                },
                width: 640,
                height: 480
            });

            await this.webcam.start();

            // Success
            if (statusEl) statusEl.innerText = "Camera Active! Move your hand to spin the galaxy.";
            if (btn) btn.style.display = 'none'; // Hide button

            // Optional: Fade out overlay partially so user sees galaxy clearly but knows it's working
            if (overlay) {
                overlay.style.pointerEvents = 'none';
                // Move status text to corner or fade it out after a few seconds
                setTimeout(() => {
                    if (statusEl) statusEl.style.opacity = '0';
                }, 5000);
            }

        } catch (err) {
            console.error("Error starting webcam:", err);

            // Allow retry
            this.webcam = null;

            let msg = "Could not access webcam.";
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                msg = "🚫 Access denied. Please enable camera in URL bar 🔒 -> Site Settings, then click Retry.";
            } else if (err.name === 'NotFoundError') {
                msg = "🚫 No camera found.";
            } else {
                msg = `Camera error: ${err.message || err.name}`;
            }

            if (statusEl) {
                statusEl.innerText = msg;
                statusEl.style.color = '#ff4444';
                statusEl.style.backgroundColor = 'rgba(0,0,0,0.9)';
                statusEl.style.padding = '10px';
                statusEl.style.borderRadius = '8px';
            }
            // Re-enable button to try again
            if (btn) {
                btn.style.display = 'block';
                btn.innerText = "Retry Camera Access";
            }
        }
    }

    onHandResults(results) {
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            this.isHandDetected = true;
            const landmarks = results.multiHandLandmarks[0];

            // Use index finger tip (point 8) and wrist (point 0) to detect movement/rotation
            const x = landmarks[8].x; // 0 to 1
            const y = landmarks[8].y; // 0 to 1

            // Map hand position to rotation target
            // Center is 0.5, 0.5. Range -0.5 to 0.5
            // Multiply to get rotation range (e.g., -PI to PI)
            this.targetRotationY = (x - 0.5) * 4; // Horizontal hand move -> Rotate around Y
            this.targetRotationX = (y - 0.5) * 4; // Vertical hand move -> Rotate around X

            // Optional: Use pinch (distance between thumb tip 4 and index tip 8) for zoom?
            // For now, let's keep it simple: rotation.
        } else {
            this.isHandDetected = false;
        }
    }

    onWindowResize() {
        if (!this.camera || !this.renderer) return;

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Smooth rotation interpolation
        if (this.isHandDetected) {
            this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.05;
            this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.05;
        } else {
            // Auto idle rotation
            this.currentRotationY += 0.001;
            // Return to flat X plane
            this.currentRotationX += (0.2 - this.currentRotationX) * 0.02; // Slight tilt
        }

        if (this.particles) {
            this.particles.rotation.x = this.currentRotationX;
            this.particles.rotation.y = this.currentRotationY;
        }

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }
}

// Global initialization function to be called from HTML
window.initMilkyWay = () => {
    const experience = new MilkyWayExperience('milky-way-container');

    // Bind button
    const btn = document.getElementById('start-milky-way-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            experience.startExperience();
            btn.style.display = 'none'; // Hide button after start
        });
    }
};
