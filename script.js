// ========================================
// JACK AMICHAI PORTFOLIO - ENHANCED SCRIPT
// 20+ Interactive Features
// ========================================

// ========================================
// 1. PAGE LOADER
// ========================================
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 500);
        }, 800);
    }
});

// ========================================
// 2. HERO PHOTO ROTATION
// ========================================
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
// 20. DYNAMIC PROJECTS RENDERING
// ========================================
function renderProject(project, view = 'business') {
    const isTechnical = view === 'technical';
    const featuredClass = project.featured ? 'featured ' : '';
    
    const githubLink = project.links?.github ? `
        <div class="project-links">
            <a href="${project.links.github}" target="_blank" class="project-link" onclick="trackCTAClick('github_${project.id}')">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Code
            </a>
        </div>
    ` : '';
    
    // Image HTML
    const imageHtml = project.image ? `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
    ` : '';

    // For featured projects, show full case study format
    if (project.featured) {
        return `
            <div class="project-card ${featuredClass}case-study" data-project-id="${project.id}">
                ${imageHtml}
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-badge">${project.featured ? 'Featured ' : ''}Case Study</span>
                        ${githubLink}
                    </div>
                    
                    <div class="case-study-section">
                        <h4 class="case-label">🔴 Problem</h4>
                        <p>${project.problem}</p>
                    </div>
                    
                    <div class="case-study-section">
                        <h4 class="case-label">👤 My Role</h4>
                        <p><strong>${project.role}</strong></p>
                    </div>
                    
                    <div class="case-study-section">
                        <h4 class="case-label">⚙️ Approach</h4>
                        <ul class="case-list">
                            ${project.approach.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="case-study-section">
                        <h4 class="case-label">🎯 Outcome</h4>
                        <div class="project-highlights">
                            ${project.metrics.map(metric => `<div class="highlight">${metric}</div>`).join('')}
                        </div>
                    </div>
                    
                    ${isTechnical && project.techDetails ? `
                        <div class="case-study-section technical-details">
                            <h4 class="case-label">🔧 Technical Implementation</h4>
                            <p>${project.techDetails}</p>
                        </div>
                    ` : ''}
                    
                    ${project.evidence ? `
                        <div class="case-study-section">
                            <h4 class="case-label">📊 Evidence</h4>
                            <p>${project.evidence}</p>
                        </div>
                    ` : ''}
                    
                    <div class="tech-tags">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    // For non-featured projects, show compact format
    return `
        <div class="project-card" data-project-id="${project.id}">
            ${imageHtml}
            <div class="project-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    ${githubLink}
                </div>
                <p class="project-description">${project.solution}</p>
                <div class="project-highlights">
                    ${project.metrics.map(metric => `<div class="highlight">${metric}</div>`).join('')}
                </div>
                ${isTechnical && project.techDetails ? `
                    <p class="technical-details"><strong>Technical:</strong> ${project.techDetails}</p>
                ` : ''}
                <div class="tech-tags">
                    ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderAllProjects(view = 'business') {
    const container = document.getElementById('projectsContainer');
    if (!container || typeof projectsData === 'undefined') return;
    
    container.innerHTML = projectsData
        .map(project => renderProject(project, view))
        .join('');
    
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
