// ===== PARTICLE BACKGROUND ANIMATION =====
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 20;
        
        this.init();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.init());
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.y > this.canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(52, 152, 219, ${particle.opacity})`;
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(52, 152, 219, ${0.2 * (1 - distance / 150)})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, this.observerOptions);
        
        this.init();
    }
    
    init() {
        // Observe fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => this.observer.observe(el));
        
        // Observe slide elements
        const slideLeftElements = document.querySelectorAll('.slide-left');
        slideLeftElements.forEach(el => this.observer.observe(el));
        
        const slideRightElements = document.querySelectorAll('.slide-right');
        slideRightElements.forEach(el => this.observer.observe(el));
        
        // Observe stagger items
        const staggerItems = document.querySelectorAll('.stagger-item');
        staggerItems.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`;
            this.observer.observe(el);
        });
    }
}

// ===== PARALLAX EFFECT =====
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        if (this.hero) {
            window.addEventListener('scroll', () => this.handleScroll());
        }
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (this.hero) {
            this.hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
        }
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.navLinkItems = document.querySelectorAll('.nav-link');
        this.header = document.querySelector('header');
        
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => {
                const isExpanded = this.menuToggle.getAttribute('aria-expanded') === 'true';
                this.menuToggle.setAttribute('aria-expanded', !isExpanded);
                this.menuToggle.classList.toggle('active');
                this.navLinks.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking on a link
        this.navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (this.menuToggle) {
                    this.menuToggle.setAttribute('aria-expanded', 'false');
                    this.menuToggle.classList.remove('active');
                    this.navLinks.classList.remove('active');
                }
            });
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Active navigation on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNav();
            this.handleHeaderScroll();
        });
    }
    
    updateActiveNav() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        this.navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    handleHeaderScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

// ===== FORM HANDLING =====
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formGroups = document.querySelectorAll('.form-group');
        
        if (this.form) {
            this.init();
        }
    }
    
    init() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('focus', (e) => {
                const formGroup = e.target.closest('.form-group');
                formGroup.classList.add('focused');
                this.hideError(input);
            });
            input.addEventListener('blur', (e) => {
                const formGroup = e.target.closest('.form-group');
                formGroup.classList.remove('focused');
            });
        });
    }
    
    validateField(input) {
        const value = input.value.trim();
        const name = input.getAttribute('name');
        let isValid = true;
        let errorMessage = '';
        
        if (value === '') {
            isValid = false;
            errorMessage = `${this.getFieldLabel(name)} harus diisi`;
        } else if (name === 'email' && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Format email tidak valid';
        }
        
        if (!isValid) {
            this.showError(input, errorMessage);
        } else {
            this.hideError(input);
        }
        
        return isValid;
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('.form-control');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        input.style.borderColor = '#e74c3c';
    }
    
    hideError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        
        input.style.borderColor = '#444';
    }
    
    getFieldLabel(name) {
        const labels = {
            'name': 'Nama',
            'email': 'Email',
            'subject': 'Subjek',
            'message': 'Pesan'
        };
        return labels[name] || name;
    }
    
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.form.querySelector('.btn-submit');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Show success message
            this.showSuccess();
            
            // Reset form
            this.form.reset();
        }, 2000);
    }
    
    showSuccess() {
        // Create success message if it doesn't exist
        let successMessage = this.form.querySelector('.form-success');
        
        if (!successMessage) {
            successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Terima kasih! Pesan Anda telah berhasil dikirim.';
            this.form.insertBefore(successMessage, this.form.firstChild);
        }
        
        successMessage.classList.add('show');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// ===== BACK TO TOP BUTTON =====
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        
        if (this.button) {
            this.init();
        }
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.button.classList.add('show');
            } else {
                this.button.classList.remove('show');
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== HERO ANIMATION =====
class HeroAnimation {
    constructor() {
        this.heroContent = document.querySelector('.hero-content');
        
        if (this.heroContent) {
            // Trigger animation after a short delay
            setTimeout(() => {
                this.heroContent.classList.add('animated');
            }, 100);
        }
    }
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    new ParticleBackground();
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize parallax effect
    new ParallaxEffect();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize contact form
    new ContactForm();
    
    // Initialize back to top button
    new BackToTop();
    
    // Initialize hero animation
    new HeroAnimation();
    
    // Update canvas height on window resize and scroll
    const canvas = document.getElementById('particleCanvas');
    const updateCanvasHeight = () => {
        if (canvas) {
            canvas.height = document.documentElement.scrollHeight;
        }
    };
    
    window.addEventListener('resize', updateCanvasHeight);
    window.addEventListener('load', updateCanvasHeight);
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

