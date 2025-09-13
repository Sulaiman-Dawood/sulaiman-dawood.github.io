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
    const expandSkillsBtn2 = document.getElementById('expand-skills2');
    const additionalSkills2 = document.getElementById('additional-skills2');
    
    if (expandSkillsBtn && additionalSkills) {
        expandSkillsBtn.addEventListener('click', function() {
            // إخفاء القائمة الثانية إذا كانت مفتوحة
            if (additionalSkills2 && additionalSkills2.classList.contains('show')) {
                additionalSkills2.classList.remove('show');
                if (expandSkillsBtn2) expandSkillsBtn2.textContent = 'SQL';
            }
            
            // تبديل القائمة الأولى
            additionalSkills.classList.toggle('show');
            
            if (additionalSkills.classList.contains('show')) {
                expandSkillsBtn.textContent = 'Python';
            } else {
                expandSkillsBtn.textContent = 'Python';
            }
        });
    }
    
    if (expandSkillsBtn2 && additionalSkills2) {
        expandSkillsBtn2.addEventListener('click', function() {
            // إخفاء القائمة الأولى إذا كانت مفتوحة
            if (additionalSkills && additionalSkills.classList.contains('show')) {
                additionalSkills.classList.remove('show');
                if (expandSkillsBtn) expandSkillsBtn.textContent = 'Python';
            }
            
            // تبديل القائمة الثانية
            additionalSkills2.classList.toggle('show');
            
            if (additionalSkills2.classList.contains('show')) {
                expandSkillsBtn2.textContent = 'SQL';
            } else {
                expandSkillsBtn2.textContent = 'SQL';
            }
        });
    }
    
    console.log('Portfolio website loaded successfully! 🚀');
});
