// ========================================
// JACK AMICHAI PORTFOLIO - ENHANCED SCRIPT
// 20+ Interactive Features
// ========================================

// ========================================
// 1. PAGE LOADER - Fast load using DOMContentLoaded
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        // Hide loader quickly once DOM is ready (don't wait for all images)
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 300);
        }, 200);
    }
});

// ========================================
// 2. HERO PHOTO ROTATION (DISABLED)
// ========================================
/*
(function() {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;
    
    const photos = [
        'images/me.jpeg',
        'images/hero-bg-1.jpg',
        'images/hero-bg-2.jpg',
        'images/hero-bg-3.jpg',
        'images/hero-bg-4.jpg'
    ];
    
    let currentIndex = 0;
    
    function rotatePhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        heroImage.style.opacity = '0';
        
        setTimeout(() => {
            heroImage.src = photos[currentIndex];
            heroImage.style.opacity = '1';
        }, 500);
    }
    
    // Add transition style
    heroImage.style.transition = 'opacity 0.5s ease-in-out';
    
    // Rotate every 6 seconds
    setInterval(rotatePhoto, 6000);
})();
*/

// ========================================
// 3. SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu) navMenu.classList.remove('active');
            const mobileToggle = document.getElementById('mobileMenuToggle');
            if (mobileToggle) mobileToggle.classList.remove('active');
        }
    });
});

// ========================================
// 4. SCROLL PROGRESS BAR
// ========================================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// 4. NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    // Add shadow on scroll
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// 7. MOBILE MENU TOGGLE
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ========================================
// 6. DARK MODE TOGGLE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
        showToast(`${theme === 'dark' ? 'Dark' : 'Light'} mode activated`);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle?.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ========================================
// 7. TYPING ANIMATION
// ========================================
const typingElements = document.querySelectorAll('.typing-text');
typingElements.forEach(element => {
    const text = element.getAttribute('data-text') || element.textContent;
    element.textContent = '';
    let charIndex = 0;
    
    function type() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing after short delay
    setTimeout(type, 500);
});

// ========================================
// 8. COPY EMAIL BUTTON
// ========================================
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        const email = copyEmailBtn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
            showToast('📧 Email copied to clipboard!');
            trackCTAClick('email_copied');
        }).catch(err => {
            showToast('Failed to copy email');
        });
    });
}

// ========================================
// 9. SOCIAL SHARE FUNCTIONS
// ========================================
function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
    trackCTAClick('share_linkedin');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out Jack Amichai\'s impressive AI Product Management portfolio!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
    trackCTAClick('share_twitter');
}

function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('🔗 Profile link copied!');
        trackCTAClick('link_copied');
    });
}

// ========================================
// 10. PROJECT FILTERS
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        });
        
        trackCTAClick(`filter_${filter}`);
    });
});

// ========================================
// 11. SKILLS PROGRESS BARS ANIMATION
// ========================================
const observeSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillFills = entry.target.querySelectorAll('.skill-fill');
            skillFills.forEach(fill => {
                const skillValue = fill.getAttribute('data-skill');
                setTimeout(() => {
                    fill.style.width = skillValue + '%';
                }, 200);
            });
            observeSkills.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills-grid').forEach(grid => {
    observeSkills.observe(grid);
});

// ========================================
// 12. INTERSECTION OBSERVER - FADE IN
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section, .project-card, .timeline-item, .testimonial-card, .download-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// 13. ACTIVE NAV LINK HIGHLIGHTING
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// 14. BACK TO TOP BUTTON
// ========================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        trackCTAClick('back_to_top');
    });
}

// ========================================
// 15. FORM VALIDATION & ENHANCEMENT
// ========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Basic validation
        if (nameInput && nameInput.value.trim().length < 2) {
            e.preventDefault();
            showToast('⚠️ Please enter a valid name');
            nameInput.focus();
            return;
        }
        
        if (emailInput && !isValidEmail(emailInput.value)) {
            e.preventDefault();
            showToast('⚠️ Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        if (messageInput && messageInput.value.trim().length < 10) {
            e.preventDefault();
            showToast('⚠️ Please enter a message (at least 10 characters)');
            messageInput.focus();
            return;
        }
        
        showToast('✅ Message sent successfully!');
        trackCTAClick('contact_form_submitted');
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ========================================
// 16. VISITOR COUNTER
// ========================================
function updateVisitorCount() {
    const visitorCountEl = document.getElementById('visitorCount');
    if (!visitorCountEl) return;
    
    let count = parseInt(localStorage.getItem('visitorCount') || '0');
    
    // Check if user visited today
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        count++;
        localStorage.setItem('visitorCount', count);
        localStorage.setItem('lastVisit', today);
    }
    
    // Animate count
    animateCount(visitorCountEl, count);
}

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

updateVisitorCount();

// ========================================
// 17. TOAST NOTIFICATIONS
// ========================================
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ========================================
// 18. KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + D: Toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        themeToggle?.click();
    }
    
    // Escape: Close mobile menu
    if (e.key === 'Escape') {
        navMenu?.classList.remove('active');
        mobileMenuToggle?.classList.remove('active');
    }
});

// ========================================
// 19. ANALYTICS TRACKING
// ========================================
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    console.log('📊 Page view tracked');
}

function trackCTAClick(ctaName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
            event_category: 'engagement',
            event_label: ctaName,
            value: 1
        });
    }
    console.log(`📊 CTA clicked: ${ctaName}`);
}

// Track page view on load
trackPageView();

// ========================================
// 20. DYNAMIC PROJECTS RENDERING (ENHANCED)
// ========================================

// Generate SVG Visuals for each project
function getProjectVisual(projectId) {
    const visuals = {
        'nvidia-doc-nav': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="15" class="visual-node" fill-opacity="0.2"/>
                <circle cx="50" cy="50" r="8" class="visual-node"/>
                <circle cx="20" cy="80" r="6" class="visual-node" fill="#28a745"/>
                <circle cx="80" cy="20" r="6" class="visual-node" fill="#17a2b8"/>
                <circle cx="80" cy="80" r="6" class="visual-node" fill="#ffc107"/>
                <line x1="50" y1="50" x2="20" y2="80" class="visual-link"/>
                <line x1="50" y1="50" x2="80" y2="20" class="visual-link"/>
                <line x1="50" y1="50" x2="80" y2="80" class="visual-link"/>
                <text x="35" y="53" class="visual-text" fill="white">RAG</text>
            </svg>
        `,
        'scholar-2-6': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="20" width="50" height="60" rx="4" fill="white" stroke="#0066cc" stroke-width="2"/>
                <line x1="35" y1="35" x2="65" y2="35" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="35" y1="45" x2="65" y2="45" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="35" y1="55" x2="55" y2="55" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="70" cy="70" r="12" fill="#0066cc" fill-opacity="0.9"/>
                <path d="M66 70L69 73L74 67" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        'sleepcall': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="30" width="40" height="40" rx="10" fill="#0066cc"/>
                <path d="M40 50L45 40L50 60L55 45L60 50" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pulse"/>
                <circle cx="75" cy="25" r="8" fill="#dc3545" class="pulse"/>
            </svg>
        `,
        'revenue-optimization': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" rx="2" fill="white" stroke="#e2e8f0" stroke-width="2"/>
                <rect x="30" y="50" width="10" height="20" fill="#0066cc" fill-opacity="0.5"/>
                <rect x="45" y="40" width="10" height="30" fill="#0066cc" fill-opacity="0.7"/>
                <rect x="60" y="30" width="10" height="40" fill="#0066cc"/>
                <path d="M25 70L75 70" stroke="#64748b" stroke-width="2"/>
                <path d="M35 50L50 40L65 30" stroke="#28a745" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `,
        'password-research': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="35" y="45" width="30" height="25" rx="2" fill="#0066cc"/>
                <path d="M35 45V35C35 27 41 27 50 27C59 27 65 27 65 35V45" stroke="#0066cc" stroke-width="4" stroke-linecap="round"/>
                <circle cx="50" cy="57" r="3" fill="white"/>
                <path d="M50 60V64" stroke="white" stroke-width="2"/>
                <text x="25" y="90" class="visual-text">SHA-256</text>
            </svg>
        `,
        'note2crm': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 30H50V60H20z" fill="white" stroke="#64748b" stroke-width="2"/>
                <path d="M60 40H90V70H60z" fill="#0066cc" stroke="#0066cc" stroke-width="2"/>
                <path d="M50 45L60 55" stroke="#28a745" stroke-width="2" stroke-dasharray="4 2"/>
                <circle cx="35" cy="45" r="5" fill="#e2e8f0"/>
                <rect x="65" y="50" width="20" height="2" fill="white"/>
                <rect x="65" y="55" width="15" height="2" fill="white"/>
            </svg>
        `,
        'orderflow-ai': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="#0066cc" stroke-width="2" stroke-dasharray="4 4" class="pulse"/>
                <rect x="35" y="35" width="30" height="30" rx="4" fill="#0066cc"/>
                <path d="M45 50L55 50M50 45L50 55" stroke="white" stroke-width="2"/>
                <circle cx="20" cy="50" r="4" fill="#28a745"/>
                <circle cx="80" cy="50" r="4" fill="#28a745"/>
            </svg>
        `,
        'safyweb': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20L80 30V50C80 70 50 85 50 85C50 85 20 70 20 50V30L50 20Z" fill="#0066cc" fill-opacity="0.1" stroke="#0066cc" stroke-width="2"/>
                <path d="M40 50L50 60L65 40" stroke="#28a745" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        'artibus': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="80" r="5" fill="#0066cc"/>
                <circle cx="80" cy="20" r="5" fill="#dc3545"/>
                <path d="M20 80C40 80 40 50 50 50C60 50 60 20 80 20" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4"/>
                <circle cx="50" cy="50" r="8" fill="white" stroke="#0066cc" stroke-width="2"/>
                <path d="M48 50L54 50M51 47L51 53" stroke="#0066cc" stroke-width="2"/>
            </svg>
        `,
        'stock-predictor': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="90" x2="90" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="10" y1="90" x2="10" y2="10" stroke="#64748b" stroke-width="2"/>
                <path d="M10 80L30 60L50 70L70 40L90 20" stroke="#0066cc" stroke-width="2" fill="none"/>
                <circle cx="90" cy="20" r="4" fill="#28a745" class="pulse"/>
                <rect x="28" y="58" width="4" height="22" fill="#0066cc" fill-opacity="0.2"/>
                <rect x="68" y="38" width="4" height="42" fill="#0066cc" fill-opacity="0.2"/>
            </svg>
        `,
        'ecommerce-recommendation': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="40" width="40" height="30" fill="none" stroke="#0066cc" stroke-width="2"/>
                <path d="M35 40V30C35 25 40 25 50 25C60 25 65 25 65 30V40" stroke="#0066cc" stroke-width="2"/>
                <circle cx="50" cy="55" r="5" fill="#ffc107"/>
                <line x1="55" y1="55" x2="75" y2="55" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="80" cy="55" r="3" fill="#cbd5e1"/>
            </svg>
        `,
        'sap-successfactors': `
            <svg class="visual-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 60C30 60 20 60 20 40C20 25 35 20 40 25C45 15 65 15 70 30C80 30 85 45 80 55" stroke="#0066cc" stroke-width="2" fill="none"/>
                <rect x="35" y="45" width="10" height="10" fill="#0066cc"/>
                <rect x="55" y="45" width="10" height="10" fill="#0066cc"/>
                <line x1="45" y1="50" x2="55" y2="50" stroke="#0066cc" stroke-width="2"/>
            </svg>
        `
    };

    return `
        <div class="visual-container">
            ${visuals[projectId] || visuals['nvidia-doc-nav']}
        </div>
    `;
}

function renderProject(project, view = 'business') {
    const isTechnical = view === 'technical';
    const isFeatured = project.featured;
    
    // Media handling
    let mediaHtml = '';
    if (project.mediaUrl) {
        if (project.mediaType === 'video') {
            mediaHtml = `
                <div class="project-media">
                    <video src="${project.mediaUrl}" autoplay loop muted playsinline></video>
                </div>
            `;
        } else {
            mediaHtml = `
                <div class="project-media">
                    <img src="${project.mediaUrl}" alt="${project.title} screenshot" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\"height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e);\\"><span style=\\"font-size:2.5rem;\\">${project.title.charAt(0)}</span></div>';">
                </div>
            `;
        }
    } else {
        // Fallback gradient if no media
        mediaHtml = `
            <div class="project-media" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 3rem; color: #4ade80;">${project.title.charAt(0)}</span>
            </div>
        `;
    }

    const githubLink = project.links && project.links.github 
        ? `<a href="${project.links.github}" target="_blank" class="icon-link" title="View Code" onclick="trackCTAClick('github_${project.id}')"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>` 
        : '';
    
    const demoLink = project.links && project.links.demo
        ? `<a href="${project.links.demo}" target="_blank" class="icon-link" title="Live Demo" onclick="trackCTAClick('demo_${project.id}')"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg></a>`
        : '';

    return `
        <div class="bento-card ${isFeatured ? 'featured' : ''}" data-project-id="${project.id}">
            ${mediaHtml}
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-links-mini">
                        ${demoLink}
                        ${githubLink}
                    </div>
                </div>
                <span class="project-role">${project.role}</span>
                
                <div class="project-description">
                    ${isTechnical && project.techDetails ? project.techDetails : project.solution}
                </div>
                
                <div class="tech-stack-mini">
                    ${project.techStack.slice(0, 4).map(tech => `<span class="tech-tag-mini">${tech}</span>`).join('')}
                    ${project.techStack.length > 4 ? `<span class="tech-tag-mini">+${project.techStack.length - 4}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Render stacked card for featured projects
function renderStackCard(project, iconType = 'ai') {
    const githubLink = project.links && project.links.github 
        ? `<a href="${project.links.github}" target="_blank" class="stack-card-link" title="View Code"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>` 
        : '';
    
    const icons = {
        ai: '🤖',
        security: '🛡️',
        research: '🔬',
        analytics: '📊',
        product: '🚀'
    };

    return `
        <div class="stack-card" onclick="window.open('${project.links?.github || '#'}', '_blank')">
            <div class="stack-card-header">
                <div class="stack-card-icon ${iconType}">${icons[iconType] || '✨'}</div>
                <h4 class="stack-card-title">${project.title}</h4>
            </div>
            <p class="stack-card-desc">${project.solution.substring(0, 100)}...</p>
            <div class="stack-card-meta">
                <div class="stack-card-tags">
                    ${project.techStack.slice(0, 2).map(tech => `<span class="stack-card-tag">${tech}</span>`).join('')}
                </div>
                ${githubLink}
            </div>
        </div>
    `;
}

function renderAllProjects(view = 'business') {
    const container = document.getElementById('projectsContainer');
    if (!container || typeof projectsData === 'undefined') return;
    
    // Get featured projects (top 3) and other projects
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    const otherProjects = projectsData.filter(p => !featuredProjects.includes(p));
    
    // Icon types for featured projects
    const iconTypes = ['security', 'ai', 'research'];
    
    // Build the HTML
    let html = `
        <div class="projects-showcase">
            <!-- Featured Stack -->
            <div class="featured-stack">
                ${featuredProjects.map((project, i) => renderStackCard(project, iconTypes[i] || 'product')).join('')}
            </div>
            
            <!-- More Projects -->
            <h3 class="more-projects-title">More Projects</h3>
            <div class="bento-grid">
                ${otherProjects.map(project => renderProject(project, view)).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    container.setAttribute('data-current-view', view);
}

// ========================================
// 21. PROJECT VIEW TOGGLE
// ========================================
function initProjectToggle() {
    const businessBtn = document.getElementById('businessViewBtn');
    const technicalBtn = document.getElementById('technicalViewBtn');
    
    if (!businessBtn || !technicalBtn) return;
    
    businessBtn.addEventListener('click', () => {
        businessBtn.classList.add('active');
        technicalBtn.classList.remove('active');
        renderAllProjects('business');
        trackCTAClick('view_toggle_business');
    });
    
    technicalBtn.addEventListener('click', () => {
        technicalBtn.classList.add('active');
        businessBtn.classList.remove('active');
        renderAllProjects('technical');
        trackCTAClick('view_toggle_technical');
    });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
    renderAllProjects('business');
    initProjectToggle();
});

// ========================================
// INITIALIZATION
// ========================================
console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Keyboard shortcuts:');
console.log('   Ctrl/Cmd + D: Toggle dark mode');
console.log('   Escape: Close mobile menu');
