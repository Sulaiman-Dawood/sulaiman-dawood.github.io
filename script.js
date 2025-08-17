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
    
    function animateElements() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
    
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
    
    animateElements();
    
    const socialLinks = document.querySelectorAll('.hero-social-link, .footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
            direction: ltr;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', function() {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
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
    
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
    });
    
    const fadeElements = document.querySelectorAll('.about-text, .project-card');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
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
    
    console.log('Portfolio website loaded successfully! 🚀');
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
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

function createDots() {
    const container = document.getElementById('dots-container');
    if (!container) return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const dotSpacing = 50;
    
    container.innerHTML = '';
    
    for (let x = 0; x < windowWidth; x += dotSpacing) {
        for (let y = 0; y < windowHeight; y += dotSpacing) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            container.appendChild(dot);
        }
    }
    
    console.log('تم إنشاء النقاط بنجاح!');
}

setTimeout(createDots, 1000);

window.addEventListener('resize', createDots);

(function initCanvasDots(){
    const canvas = document.getElementById('bg-dots');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, deviceRatio;
    function resize(){
        deviceRatio = window.devicePixelRatio || 1;
        w = window.innerWidth; h = window.innerHeight;
        canvas.width = w * deviceRatio;
        canvas.height = h * deviceRatio;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.scale(deviceRatio, deviceRatio);
    }
    function draw(t){
        ctx.clearRect(0,0,w,h);
        const spacing = 60;
        const radius = 2;
        const offset = (t * 0.01) % spacing;
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        for(let x = -spacing; x < w + spacing; x += spacing){
            for(let y = -spacing; y < h + spacing; y += spacing){
                ctx.beginPath();
                ctx.arc(x + offset, y + offset, radius, 0, Math.PI*2);
                ctx.fill();
            }
        }
        requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
})();
