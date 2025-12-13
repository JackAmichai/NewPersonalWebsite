/**
 * UX Visual Enhancements
 * - Scroll Progress Indicator
 * - Page Loader / Skeleton States
 * - Scroll Animations (fade-in on scroll)
 * - Custom Cursor Effects
 * - Parallax Scrolling
 */

(function () {
    'use strict';

    // ==================== 
    // 1. SCROLL PROGRESS INDICATOR
    // ====================
    function initScrollProgress() {
        const progressBar = document.getElementById('scroll-progress');
        if (!progressBar) return;

        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // ==================== 
    // 2. PAGE LOADER
    // ====================
    function initPageLoader() {
        const loader = document.getElementById('page-loader');
        if (!loader) return;

        window.addEventListener('load', () => {
            loader.classList.add('loaded');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
    }

    // ==================== 
    // 3. SCROLL ANIMATIONS (Fade-in on scroll)
    // ====================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.section-title, .hobby-card, .book-item, .timeline-item, ' +
            '.skill-item, .tech-group, .testimonial-card, .video-card, ' +
            '.leairn-stat-card, .slide-card, .resource-card-new, .mini-card'
        );

        // Add animation class
        animatedElements.forEach(el => {
            el.classList.add('scroll-animate');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ==================== 
    // 4. CUSTOM CURSOR EFFECTS
    // ====================
    function initCustomCursor() {
        // Create cursor elements
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
        document.body.appendChild(cursor);

        const dot = cursor.querySelector('.cursor-dot');
        const ring = cursor.querySelector('.cursor-ring');

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        // Smooth ring follow
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effects on interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .btn-primary, .btn-leairn, .video-card, .hobby-card, ' +
            '.book-item, .nav-link, .timeline-item, .skill-item'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });

        // Hide on touch devices
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
        }
    }

    // ==================== 
    // 5. PARALLAX SCROLLING
    // ====================
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero, .leairn-showcase');

        function updateParallax() {
            const scrollY = window.scrollY;

            parallaxElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const speed = 0.3;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const yOffset = (scrollY - el.offsetTop) * speed;
                    el.style.setProperty('--parallax-y', yOffset + 'px');
                }
            });
        }

        window.addEventListener('scroll', updateParallax, { passive: true });
        updateParallax();
    }

    // ==================== 
    // SMOOTH PAGE TRANSITIONS
    // ====================
    function initPageTransitions() {
        // Add transition class to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.setProperty('--section-index', index);
            section.classList.add('section-transition');
        });
    }

    // ==================== 
    // INITIALIZE ALL
    // ====================
    document.addEventListener('DOMContentLoaded', () => {
        initScrollProgress();
        initPageLoader();
        initScrollAnimations();
        initCustomCursor();
        initParallax();
        initPageTransitions();
    });

})();
