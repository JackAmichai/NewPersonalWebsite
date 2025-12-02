// ==================== 
// SMOOTH MODULE REVEALS ON SCROLL
// ====================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const moduleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            moduleObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all modules
document.querySelectorAll('.module').forEach(module => {
    moduleObserver.observe(module);
});

// ==================== 
// PARALLAX HERO IMAGE
// ====================

const heroModule = document.querySelector('.hero-module');
const heroImage = document.querySelector('.hero-image');

if (heroModule && heroImage) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.3;
                heroImage.style.transform = `translateY(${rate}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ==================== 
// MOBILE MENU TOGGLE
// ====================

const createMobileMenu = () => {
    const existingBtn = document.querySelector('.mobile-menu-btn');
    if (existingBtn) return; // Already created
    
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.main-nav');
        const header = document.querySelector('.site-header');
        const menuBtn = document.createElement('button');
        
        menuBtn.classList.add('mobile-menu-btn');
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        menuBtn.style.cssText = `
            background: none;
            border: 2px solid var(--accent-primary);
            color: var(--accent-primary);
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        header.insertBefore(menuBtn, nav);
        nav.style.display = 'none';
        
        menuBtn.addEventListener('click', () => {
            const isVisible = nav.style.display === 'flex';
            nav.style.display = isVisible ? 'none' : 'flex';
            menuBtn.innerHTML = isVisible ? '☰' : '✕';
            
            if (!isVisible) {
                nav.style.flexDirection = 'column';
                nav.style.width = '100%';
                nav.style.marginTop = '1rem';
            }
        });
    }
};

// Initialize mobile menu on load and resize
createMobileMenu();
window.addEventListener('resize', () => {
    const nav = document.querySelector('.main-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth > 768) {
        if (menuBtn) menuBtn.remove();
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
    } else {
        createMobileMenu();
    }
});

// ==================== 
// CURSOR GLOW EFFECT (Desktop only)
// ====================

if (window.innerWidth > 768) {
    let throttleTimer = false;
    
    document.addEventListener('mousemove', (e) => {
        if (throttleTimer) return;
        
        throttleTimer = true;
        setTimeout(() => {
            throttleTimer = false;
        }, 50);
        
        const glow = document.createElement('div');
        glow.classList.add('cursor-glow');
        glow.style.left = e.pageX + 'px';
        glow.style.top = e.pageY + 'px';
        document.body.appendChild(glow);
        
        setTimeout(() => glow.remove(), 1000);
    });
}

// ==================== 
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 
// DYNAMIC SKILL ANIMATION
// ====================

const skills = document.querySelectorAll('.skill-item');
skills.forEach((skill, index) => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skill.style.opacity = '1';
        skill.style.transform = 'translateX(0)';
    }, 100 * index);
});

// ==================== 
// TIMELINE ANIMATION
// ====================

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    timelineObserver.observe(item);
});

// ==================== 
// BLOG PREVIEW HOVER EFFECT
// ====================

document.querySelectorAll('.blog-preview').forEach(preview => {
    preview.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    preview.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== 
// HEADER BACKGROUND ON SCROLL
// ====================

const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== 
// KEYBOARD NAVIGATION ENHANCEMENT
// ====================

document.addEventListener('keydown', (e) => {
    // Allow Escape key to close mobile menu
    if (e.key === 'Escape') {
        const nav = document.querySelector('.main-nav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (nav && nav.style.display === 'flex' && window.innerWidth <= 768) {
            nav.style.display = 'none';
            if (menuBtn) menuBtn.innerHTML = '☰';
        }
    }
});

// ==================== 
// PRELOAD CRITICAL IMAGES
// ====================

const preloadImages = () => {
    const imageSources = [
        'images/hero-photo.jpg',
        'images/nvidia-project.jpg',
        'images/books-violin.jpg'
    ];
    
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Preload after page loads
window.addEventListener('load', preloadImages);

// ==================== 
// PERFORMANCE MONITORING (Optional)
// ====================

if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.renderTime || entry.loadTime);
                }
            }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // Observer not supported in this browser
    }
}

// ==================== 
// CONSOLE MESSAGE
// ====================

console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #3B82F6;');
console.log('%cInterested in how this was built? Check out the code on GitHub!', 'font-size: 14px; color: #94A3B8;');
console.log('%chttps://github.com/jack-amichai', 'font-size: 14px; color: #3B82F6;');
