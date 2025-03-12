// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Login Modal Functionality
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.querySelector('.login-modal');
    const closeBtn = document.querySelector('.close');
    
    if (loginBtn && loginModal && closeBtn) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
        
        closeBtn.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
    
    // Tab Functionality for Services Section
    const tabs = document.querySelectorAll('.tab');
    
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                const tabContents = document.querySelectorAll('.tab-content');
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Show the corresponding tab content
                const tabId = this.getAttribute('data-tab');
                const activeContent = document.getElementById(`${tabId}-content`);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for header
                        behavior: 'smooth'
                    });
                    
                    // Update active class in navigation
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Form validation for login form
    const loginForm = document.querySelector('.login-modal form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const userType = document.getElementById('user-type').value;
            
            if (username && password) {
                // Simulate login (in a real application, this would be handled by backend)
                alert(`Login successful as ${userType}!`);
                loginModal.style.display = 'none';
                
                // In a real application, you would redirect to dashboard or home page
                // window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both username and password.');
            }
        });
    }
    
    // Transaction form handling
    const transactionForm = document.querySelector('.transaction-form form');
    
    if (transactionForm) {
        transactionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fromAccount = document.getElementById('from-account').value;
            const toAccount = document.getElementById('to-account').value;
            const amount = document.getElementById('amount').value;
            const transactionType = document.getElementById('transaction-type').value;
            
            if (fromAccount && (transactionType === 'withdrawal' || toAccount) && amount) {
                // Simulate transaction processing (in a real application, this would be handled by backend)
                alert(`${transactionType} of $${amount} processed successfully!`);
                
                // Clear form fields
                this.reset();
                
                // In a real application, you would update the transaction history
                // updateTransactionHistory();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Simulate form submission (in a real application, this would be handled by backend)
                alert('Your message has been sent successfully!');
                
                // Clear form fields
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.footer-newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate newsletter subscription (in a real application, this would be handled by backend)
                alert('Thank you for subscribing to our newsletter!');
                
                // Clear form field
                this.reset();
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Update active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('nav a[href*=' + sectionId + ']')?.classList.add('active');
            } else {
                document.querySelector('nav a[href*=' + sectionId + ']')?.classList.remove('active');
            }
        });
    });
});