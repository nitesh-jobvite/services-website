// ===================================
// EmailJS Initialization
// ===================================
// Initialize EmailJS with your public key
// IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Get it from: https://dashboard.emailjs.com/admin/account
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// ===================================
// Smooth Scrolling Navigation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-wrapper')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// Form Validation and Submission with EmailJS
// ===================================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone'); // New phone input
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError'); // New error message
const submitBtn = document.getElementById('submitBtn');

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// New phone validation function
function validatePhone(phone) {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if phone has 8-15 digits (accommodates various formats)
    return cleanPhone.length >= 8 && cleanPhone.length <= 15;
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Display error message
function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
}

// Clear error message
function clearError(inputId) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = '';
}

// Real-time validation
nameInput.addEventListener('blur', function() {
    if (!validateName(this.value)) {
        showError('name', 'Please enter a valid name (at least 2 characters)');
    } else {
        clearError('name');
    }
});

emailInput.addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

// Phone number validation on blur
phoneInput.addEventListener('blur', function() {
    if (!validatePhone(this.value)) {
        showError('phone', 'Please enter a valid phone number (8-15 digits)');
    } else {
        clearError('phone');
    }
});

// Allow only numbers, spaces, hyphens, and parentheses in phone input
phoneInput.addEventListener('input', function(e) {
    // Allow numbers, spaces, +, -, (, )
    this.value = this.value.replace(/[^0-9\s\-\+\(\)]/g, '');
});

messageInput.addEventListener('blur', function() {
    if (!validateMessage(this.value)) {
        showError('message', 'Please enter a message (at least 10 characters)');
    } else {
        clearError('message');
    }
});

// Form submission with EmailJS
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors and messages
    clearError('name');
    clearError('email');
    clearError('phone');
    clearError('message');
    formSuccess.classList.remove('show');
    formError.classList.remove('show');
    
    // Get form values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;
    
    // Validation flags
    let isValid = true;
    
    // Validate name
    if (!validateName(name)) {
        showError('name', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    }
    
    // Validate email
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    if (!validatePhone(phone)) {
        showError('phone', 'Please enter a valid phone number (8-15 digits)');
        isValid = false;
    }
    
    // Validate message
    if (!validateMessage(message)) {
        showError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    // If form is valid, send email via EmailJS
    if (isValid) {
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').style.display = 'none';
        submitBtn.querySelector('.btn-loader').style.display = 'inline-block';
        
        // EmailJS service configuration
        // IMPORTANT: Replace these with your actual EmailJS credentials
        // 1. Create account at https://www.emailjs.com/
        // 2. Add email service (Gmail, Outlook, etc.)
        // 3. Create email template with variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
        // 4. Get your Service ID, Template ID, and Public Key
        
        const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
        
        // Template parameters matching your EmailJS template
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message,
            to_email: 'me.nkj7@gmail.com' // Your email address
        };
        
        // Send email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                formSuccess.classList.add('show');
                
                // Reset form
                contactForm.reset();
                
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').style.display = 'inline-block';
                submitBtn.querySelector('.btn-loader').style.display = 'none';
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                formError.classList.add('show');
                
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').style.display = 'inline-block';
                submitBtn.querySelector('.btn-loader').style.display = 'none';
                
                // Hide error message after 5 seconds
                setTimeout(function() {
                    formError.classList.remove('show');
                }, 5000);
            });
    }
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Callback function for intersection observer
const observerCallback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

// Create observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const whyUsCards = document.querySelectorAll('.why-us-card');
    
    // Initially hide cards for animation
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    whyUsCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// ===================================
// Active Navigation Link Highlighting
// ===================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Scroll to Top on Page Load
// ===================================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ===================================
// Prevent Form Resubmission on Refresh
// ===================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
