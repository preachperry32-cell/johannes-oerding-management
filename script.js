// ===== Smooth Scrolling & Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initFormHandler();
    updateActiveNavLink();
    initAnimations();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Form Handler =====
function initFormHandler() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

function handleFormSubmission(form) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const inquiry = document.getElementById('inquiry').value;
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !subject || !inquiry || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Message length validation
    if (message.length < 10) {
        showNotification('Message must be at least 10 characters long', 'error');
        return;
    }

    // Success message
    showNotification('✓ Message sent successfully! We will get back to you soon.', 'success');
    
    // Log the form data (in production, send to backend)
    console.log({
        name,
        email,
        subject,
        inquiry,
        message,
        timestamp: new Date().toISOString()
    });

    // Reset form
    form.reset();
}

// ===== Notification System =====
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 5000);
}

// ===== Active Navigation Link =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Animations on Scroll =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// ===== Real-time Email Validation =====
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#f44336';
                this.style.background = '#ffebee';
            } else {
                this.style.borderColor = '#ddd';
                this.style.background = '#fff';
            }
        });
    }
});

// ===== Console Welcome =====
console.log('%c🎵 Welcome to Nicolas Gundel Management', 'font-size: 16px; font-weight: bold; color: #f4c400;');
console.log('%cRepresenting: Johannes Oerding', 'font-size: 12px; color: #111;');
console.log('%cFor inquiries, use the contact form above.', 'font-size: 11px; color: #666;');

// ===== Keyboard Accessibility =====
document.addEventListener('keydown', function(e) {
    // Close notifications with Escape key
    if (e.key === 'Escape') {
        document.querySelectorAll('.notification').forEach(n => n.remove());
    }
});

// ===== Page Load Performance =====
window.addEventListener('load', function() {
    console.log('✓ Page loaded successfully');
    
    // Track page load time
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});