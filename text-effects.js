
/**
 * Text Effects Utils
 * Handles Fade In and Stagger animations
 */

class TextReveal {
    constructor(element) {
        this.element = element;
        this.type = element.dataset.effect || 'word'; // word, char, line
        this.delay = parseFloat(element.dataset.delay) || 0;

        this.init();
    }

    init() {
        const text = this.element.innerText;
        this.element.innerHTML = '';
        this.element.style.opacity = '1'; // Ensure container is visible

        if (this.type === 'word') {
            // Split by space but capture the space
            const segments = text.split(/(\s+)/);
            segments.forEach(segment => {
                const span = document.createElement('span');
                span.innerText = segment;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                // Critical fix for spacing:
                span.style.whiteSpace = 'pre';

                span.style.transform = 'translateY(10px)';
                span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                span.classList.add('reveal-item');
                this.element.appendChild(span);
            });
        } else if (this.type === 'char') {
            const chars = text.split('');
            chars.forEach(char => {
                const span = document.createElement('span');
                span.innerText = char;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.whiteSpace = 'pre'; // Fix for char spacing

                span.style.transform = 'translateY(10px)';
                span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                span.classList.add('reveal-item');
                this.element.appendChild(span);
            });
        }

        this.observe();
    }

    observe() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(this.element);
    }

    animate() {
        const items = this.element.querySelectorAll('.reveal-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, this.delay * 1000 + (index * 50)); // 50ms stagger
        });
    }
}

// Init function
window.initTextEffects = () => {
    const elements = document.querySelectorAll('.text-reveal');
    elements.forEach(el => new TextReveal(el));
};

window.addEventListener('load', window.initTextEffects);
