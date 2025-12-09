// ========================================
// JACK AMICHAI PORTFOLIO - REFACTORED SCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Page Loader
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 300);
        }, 200);
    }

    // Initialize Projects
    renderAllProjects();
    
    // Other initializations
    initSmoothScroll();
    initMobileMenu();
});

// ========================================
// PROJECTS RENDERING
// ========================================

function renderAllProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container || typeof projectsData === 'undefined') return;

    // Use a grid for the cards
    // The current CSS for #projectsContainer is .bento-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); ... }
    // This matches well with the simple card structure.
    
    const html = projectsData.map(project => renderProjectCard(project)).join('');
    container.innerHTML = html;
}

function renderProjectCard(project) {
    // Map project data to requested structure
    // Project Title -> project.title
    // Problem -> project.problem
    // Solution -> project.solution
    // Impact -> project.outcome + (project.metrics joined if available)

    // Format impact string
    let impactContent = project.outcome || "";
    
    if (project.metrics && project.metrics.length > 0) {
        const metricsHtml = project.metrics.join(' • ');
        
        if (impactContent) {
            impactContent = `${impactContent} <br/> ${metricsHtml}`;
        } else {
            impactContent = metricsHtml;
        }
    }

    return `
<div class="project-card p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
  <h3 class="font-bold text-xl mb-2 text-gray-900">${project.title}</h3>

  <p class="mb-2 text-gray-700">
    <strong>Problem:</strong> ${project.problem}
  </p>

  <p class="mb-2 text-gray-700">
    <strong>Solution:</strong> ${project.solution}
  </p>

  <p class="text-gray-700">
    <strong>Impact:</strong> ${impactContent}
  </p>
</div>
    `;
}

// ========================================
// UTILITIES
// ========================================

function initSmoothScroll() {
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
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                if (navMenu) navMenu.classList.remove('active');
                if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            }
        });
    });
}

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Analytics (Placeholder)
function trackCTAClick(label) {
    console.log('Click tracked:', label);
}
