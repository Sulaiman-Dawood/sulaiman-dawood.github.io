document.addEventListener('DOMContentLoaded', function() {
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('ti-menu-2');
            icon.classList.add('ti-x');
        } else {
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    const socialLinks = document.querySelectorAll('.hero-social-link, .footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const subtitleText = heroSubtitle.textContent;
        
        setTimeout(() => {
            typeWriter(heroSubtitle, subtitleText, 50);
        }, 1000);
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
        tag.style.transition = 'all 0.3s ease';
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        }
    });
    
    // Skills expansion functionality
    const expandSkillsBtn = document.getElementById('expand-skills');
    const additionalSkills = document.getElementById('additional-skills');
    
    if (expandSkillsBtn && additionalSkills) {
        expandSkillsBtn.addEventListener('click', function() {
            additionalSkills.classList.toggle('show');
            
            // Change the Python to show expanded state
            if (additionalSkills.classList.contains('show')) {
                expandSkillsBtn.textContent = 'Python';
                expandSkillsBtn.style.fontSize = '0.85rem';
            } else {
                expandSkillsBtn.textContent = 'Python';
                expandSkillsBtn.style.fontSize = '0.95rem';
            }
        });
    }
    
    console.log('Portfolio website loaded successfully! 🚀');
});

const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .nav-link.active {
        color: #3498db;
    }
    
    .header {
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(style);
