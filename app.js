// DevPortfolio-Pro - Main JavaScript Application
// Professional Portfolio Website with Advanced Interactions

(function() {
    'use strict';
    
    // Application Data
    const DATA = {
        personal: {
            name: "Your Name",
            title: "Full Stack Developer & Security Expert",
            tagline: "Code • Create • Innovate - Your Digital Showcase",
            email: "contact@yourwebsite.com",
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            location: "Your City, Country"
        },
        stats: [
            {label: "Projects Completed", value: 50},
            {label: "Lines of Code", value: 10000},
            {label: "Years Experience", value: 3},
            {label: "Technologies Mastered", value: 25}
        ],
        typingRoles: [
            "Python Developer",
            "Full Stack Engineer", 
            "Automation Expert",
            "Ethical Hacker",
            "Security Researcher",
            "Open Source Contributor"
        ],
        projects: [
            {
                id: 1,
                title: "AutoBot Pro",
                description: "Advanced Telegram automation bot with multi-platform social media downloading, user management, and educational hacking content delivery.",
                technologies: ["Python", "Telegram API", "AsyncIO", "SQLite"],
                category: "automation",
                difficulty: "advanced",
                features: ["Multi-platform downloads", "User analytics", "Automated responses", "Content management"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/autobot-pro"
            },
            {
                id: 2,
                title: "SecureShield",
                description: "Comprehensive ethical hacking toolkit for penetration testing, vulnerability scanning, and security assessment.",
                technologies: ["Python", "Nmap", "Metasploit", "Linux"],
                category: "security",
                difficulty: "expert",
                features: ["Port scanning", "Vulnerability detection", "Report generation", "Network mapping"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/secureshield"
            },
            {
                id: 3,
                title: "WebCrawler Elite",
                description: "High-performance web scraping solution with anti-detection mechanisms and data processing pipelines.",
                technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup"],
                category: "automation",
                difficulty: "advanced",
                features: ["Anti-bot detection", "Proxy rotation", "Data cleaning", "Export formats"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/webcrawler-elite"
            },
            {
                id: 4,
                title: "CloudDeploy",
                description: "Automated deployment pipeline with Docker containerization and CI/CD integration for seamless application delivery.",
                technologies: ["Docker", "Jenkins", "Python", "Bash"],
                category: "devops",
                difficulty: "advanced",
                features: ["Automated testing", "Container orchestration", "Rollback capabilities", "Multi-environment support"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/clouddeploy"
            },
            {
                id: 5,
                title: "TermuxPro",
                description: "Enhanced Termux development environment with GUI support, custom tools, and educational scripting resources.",
                technologies: ["Linux", "Bash", "Python", "X11"],
                category: "tools",
                difficulty: "intermediate",
                features: ["GUI integration", "Package management", "Custom scripts", "Educational content"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/termuxpro"
            },
            {
                id: 6,
                title: "CyberScan",
                description: "Network security scanner with OSINT capabilities, threat intelligence integration, and comprehensive reporting.",
                technologies: ["Python", "Nmap", "Shodan API", "OSINT Tools"],
                category: "security",
                difficulty: "expert",
                features: ["Network enumeration", "Threat intelligence", "OSINT gathering", "Risk assessment"],
                demo_url: "https://demo.example.com",
                github_url: "https://github.com/yourusername/cyberscan"
            }
        ],
        skills: [
            {
                category: "Programming Languages",
                items: [
                    {name: "Python", level: 95},
                    {name: "JavaScript", level: 85},
                    {name: "Bash", level: 90},
                    {name: "SQL", level: 80},
                    {name: "HTML/CSS", level: 90}
                ]
            },
            {
                category: "Web Frameworks",
                items: [
                    {name: "Flask", level: 90},
                    {name: "Django", level: 85},
                    {name: "FastAPI", level: 80},
                    {name: "Node.js", level: 75}
                ]
            },
            {
                category: "Security & Ethical Hacking",
                items: [
                    {name: "Penetration Testing", level: 85},
                    {name: "OSINT", level: 90},
                    {name: "Network Security", level: 80},
                    {name: "Vulnerability Assessment", level: 85}
                ]
            },
            {
                category: "DevOps & Tools",
                items: [
                    {name: "Docker", level: 85},
                    {name: "Linux Administration", level: 90},
                    {name: "Git", level: 95},
                    {name: "CI/CD", level: 80}
                ]
            },
            {
                category: "Databases",
                items: [
                    {name: "PostgreSQL", level: 85},
                    {name: "MongoDB", level: 75},
                    {name: "SQLite", level: 90},
                    {name: "Redis", level: 70}
                ]
            }
        ],
        blogPosts: [
            {
                title: "Advanced Python Automation Techniques",
                excerpt: "Explore cutting-edge automation strategies using Python, from web scraping to API integration and task scheduling.",
                readTime: "8 min read",
                tags: ["Python", "Automation", "Advanced"],
                publishDate: "2025-01-15"
            },
            {
                title: "Building Secure Web Applications",
                excerpt: "Comprehensive guide to web application security, covering OWASP Top 10, secure coding practices, and defense strategies.",
                readTime: "12 min read",
                tags: ["Security", "Web Development", "Best Practices"],
                publishDate: "2025-01-08"
            },
            {
                title: "Ethical Hacking: A Beginner's Guide",
                excerpt: "Introduction to ethical hacking methodologies, tools, and techniques for responsible security testing and vulnerability discovery.",
                readTime: "15 min read",
                tags: ["Ethical Hacking", "Security", "Beginner"],
                publishDate: "2025-01-01"
            },
            {
                title: "Mastering Termux for Mobile Development",
                excerpt: "Complete guide to setting up a powerful development environment on Android using Termux, including GUI setup and tool installation.",
                readTime: "10 min read",
                tags: ["Termux", "Mobile Development", "Linux"],
                publishDate: "2024-12-25"
            }
        ]
    };
    
    // Application State
    let currentFilter = 'all';
    let animationsEnabled = true;
    let currentTypingIndex = 0;
    let typingInterval = null;
    let statsAnimated = false;
    let skillsAnimated = false;
    
    // DOM Elements
    const elements = {
        navbar: null,
        hamburger: null,
        navMenu: null,
        navLinks: null,
        typingText: null,
        statsNumbers: null,
        projectsGrid: null,
        filterBtns: null,
        searchInput: null,
        skillsGrid: null,
        blogGrid: null,
        contactForm: null
    };
    
    // Initialize Application
    function init() {
        console.log('Initializing DevPortfolio-Pro...');
        cacheElements();
        setupEventListeners();
        initializeTypingAnimation();
        renderProjects();
        renderSkills();
        renderBlogPosts();
        setupIntersectionObserver();
        console.log('DevPortfolio-Pro initialized successfully!');
    }
    
    // Cache DOM Elements
    function cacheElements() {
        elements.navbar = document.getElementById('navbar');
        elements.hamburger = document.getElementById('hamburger');
        elements.navMenu = document.getElementById('nav-menu');
        elements.navLinks = document.querySelectorAll('.nav-link');
        elements.typingText = document.getElementById('typing-text');
        elements.statsNumbers = document.querySelectorAll('.stat-number');
        elements.projectsGrid = document.getElementById('projects-grid');
        elements.filterBtns = document.querySelectorAll('.filter-btn');
        elements.searchInput = document.getElementById('projects-search');
        elements.skillsGrid = document.getElementById('skills-grid');
        elements.blogGrid = document.getElementById('blog-grid');
        elements.contactForm = document.getElementById('contact-form');
        
        console.log('Elements cached:', {
            navbar: !!elements.navbar,
            searchInput: !!elements.searchInput,
            navLinks: elements.navLinks.length
        });
    }
    
    // Setup Event Listeners
    function setupEventListeners() {
        // Navigation
        if (elements.hamburger) {
            elements.hamburger.addEventListener('click', toggleMobileMenu);
        }
        
        // Navbar scroll effect
        window.addEventListener('scroll', debounce(handleScroll, 10));
        
        // Project filtering
        if (elements.filterBtns && elements.filterBtns.length > 0) {
            elements.filterBtns.forEach(btn => {
                btn.addEventListener('click', handleFilterClick);
            });
        }
        
        // Project search - Fixed implementation
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', function(e) {
                console.log('Search input:', e.target.value);
                debounce(handleSearch, 300)();
            });
            
            elements.searchInput.addEventListener('keyup', function(e) {
                handleSearch();
            });
        }
        
        // Contact form
        if (elements.contactForm) {
            elements.contactForm.addEventListener('submit', handleContactSubmit);
            
            // Real-time validation
            const formInputs = elements.contactForm.querySelectorAll('.form-control');
            formInputs.forEach(input => {
                input.addEventListener('blur', validateField);
                input.addEventListener('input', clearError);
            });
        }
        
        // Navigation links - Fixed smooth scrolling
        if (elements.navLinks && elements.navLinks.length > 0) {
            elements.navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                            const navbarHeight = elements.navbar ? elements.navbar.offsetHeight : 80;
                            const targetPosition = targetElement.offsetTop - navbarHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                            
                            // Update active nav link
                            elements.navLinks.forEach(navLink => navLink.classList.remove('active'));
                            this.classList.add('active');
                            
                            // Close mobile menu if open
                            if (elements.navMenu && elements.navMenu.classList.contains('active')) {
                                toggleMobileMenu();
                            }
                        }
                    }
                });
            });
        }
        
        // Window resize
        window.addEventListener('resize', debounce(handleResize, 250));
        
        console.log('Event listeners setup complete');
    }
    
    // Typing Animation
    function initializeTypingAnimation() {
        if (!elements.typingText) {
            console.warn('Typing text element not found');
            return;
        }
        
        let charIndex = 0;
        let currentRole = '';
        let isDeleting = false;
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseDuration = 2000;
        
        function typeRole() {
            const roles = DATA.typingRoles;
            const currentRoleText = roles[currentTypingIndex];
            
            if (isDeleting) {
                currentRole = currentRoleText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentRole = currentRoleText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            elements.typingText.textContent = currentRole;
            
            let speed = isDeleting ? deleteSpeed : typeSpeed;
            
            if (!isDeleting && charIndex === currentRoleText.length) {
                speed = pauseDuration;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentTypingIndex = (currentTypingIndex + 1) % roles.length;
            }
            
            typingInterval = setTimeout(typeRole, speed);
        }
        
        typeRole();
        console.log('Typing animation initialized');
    }
    
    // Statistics Counter Animation
    function animateStats() {
        if (!elements.statsNumbers || statsAnimated) return;
        
        statsAnimated = true;
        console.log('Animating stats...');
        
        elements.statsNumbers.forEach((stat, index) => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        });
    }
    
    // Render Projects
    function renderProjects(filteredProjects = DATA.projects) {
        if (!elements.projectsGrid) {
            console.warn('Projects grid not found');
            return;
        }
        
        console.log('Rendering projects:', filteredProjects.length);
        elements.projectsGrid.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            elements.projectsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: rgba(255,255,255,0.6);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>No projects found matching your search criteria.</p>
                </div>
            `;
            return;
        }
        
        filteredProjects.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectCard.style.opacity = '0';
            projectCard.style.transform = 'translateY(30px)';
            elements.projectsGrid.appendChild(projectCard);
            
            // Animate in
            setTimeout(() => {
                projectCard.style.transition = 'all 0.5s ease';
                projectCard.style.opacity = '1';
                projectCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Create Project Card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        
        const difficultyColors = {
            beginner: '#00FF88',
            intermediate: '#00D4FF',
            advanced: '#FF6B35',
            expert: '#8B5CF6'
        };
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-difficulty" style="background: ${difficultyColors[project.difficulty] || '#00D4FF'}; color: #0D1117;">
                    ${project.difficulty}
                </span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-features">
                <h4>Key Features</h4>
                <ul class="features-list">
                    ${project.features.map(feature => 
                        `<li>${feature}</li>`
                    ).join('')}
                </ul>
            </div>
            <div class="project-links">
                <a href="${project.demo_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
                <a href="${project.github_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i>
                    Source Code
                </a>
            </div>
        `;
        
        return card;
    }
    
    // Handle Filter Click
    function handleFilterClick(e) {
        const filter = e.target.getAttribute('data-filter');
        console.log('Filter clicked:', filter);
        
        // Update active filter button
        elements.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = filter;
        filterProjects();
    }
    
    // Filter Projects - Fixed implementation
    function filterProjects() {
        let filteredProjects = [...DATA.projects];
        
        // Apply category filter
        if (currentFilter !== 'all') {
            filteredProjects = filteredProjects.filter(project => 
                project.category === currentFilter
            );
            console.log('Filtered by category:', currentFilter, filteredProjects.length);
        }
        
        // Apply search filter
        const searchTerm = elements.searchInput ? elements.searchInput.value.toLowerCase().trim() : '';
        if (searchTerm) {
            filteredProjects = filteredProjects.filter(project =>
                project.title.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.technologies.some(tech => 
                    tech.toLowerCase().includes(searchTerm)
                ) ||
                project.features.some(feature => 
                    feature.toLowerCase().includes(searchTerm)
                )
            );
            console.log('Filtered by search:', searchTerm, filteredProjects.length);
        }
        
        renderProjects(filteredProjects);
    }
    
    // Handle Search - Fixed implementation
    function handleSearch() {
        console.log('Search triggered');
        filterProjects();
    }
    
    // Render Skills
    function renderSkills() {
        if (!elements.skillsGrid) {
            console.warn('Skills grid not found');
            return;
        }
        
        console.log('Rendering skills...');
        elements.skillsGrid.innerHTML = '';
        
        DATA.skills.forEach((category, categoryIndex) => {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';
            
            skillCategory.innerHTML = `
                <h3>${category.category}</h3>
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            `;
            
            elements.skillsGrid.appendChild(skillCategory);
        });
    }
    
    // Animate Skill Bars
    function animateSkillBars() {
        if (skillsAnimated) return;
        
        skillsAnimated = true;
        console.log('Animating skill bars...');
        
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            const level = parseInt(bar.getAttribute('data-level'));
            setTimeout(() => {
                bar.style.width = `${level}%`;
            }, index * 100);
        });
    }
    
    // Render Blog Posts
    function renderBlogPosts() {
        if (!elements.blogGrid) {
            console.warn('Blog grid not found');
            return;
        }
        
        console.log('Rendering blog posts...');
        elements.blogGrid.innerHTML = '';
        
        DATA.blogPosts.forEach((post, index) => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            
            blogCard.innerHTML = `
                <div class="blog-meta">
                    <span class="blog-read-time">${post.readTime}</span>
                    <span class="blog-date">${new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => 
                        `<span class="blog-tag">${tag}</span>`
                    ).join('')}
                </div>
            `;
            
            // Add click handler for future blog functionality
            blogCard.addEventListener('click', () => {
                console.log(`Opening blog post: ${post.title}`);
                showSuccessMessage('Blog post feature coming soon!');
            });
            
            elements.blogGrid.appendChild(blogCard);
        });
    }
    
    // Toggle Mobile Menu
    function toggleMobileMenu() {
        if (elements.hamburger && elements.navMenu) {
            elements.hamburger.classList.toggle('active');
            elements.navMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        }
    }
    
    // Handle Scroll
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Navbar scroll effect
        if (elements.navbar) {
            if (scrollY > 50) {
                elements.navbar.classList.add('scrolled');
            } else {
                elements.navbar.classList.remove('scrolled');
            }
        }
        
        // Update active navigation link
        updateActiveNavLink();
    }
    
    // Update Active Navigation Link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos < bottom) {
                elements.navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Setup Intersection Observer
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // Animate stats when hero section is visible
                    if (target.id === 'home') {
                        setTimeout(() => animateStats(), 500);
                    }
                    
                    // Animate skill bars when skills section is visible
                    if (target.id === 'skills') {
                        setTimeout(() => animateSkillBars(), 300);
                    }
                    
                    // Add fade-in animation
                    target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
        
        console.log('Intersection Observer setup complete');
    }
    
    // Contact Form Handling
    function handleContactSubmit(e) {
        e.preventDefault();
        console.log('Contact form submitted');
        
        const formData = new FormData(elements.contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showSuccessMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
            elements.contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Clear any error messages
            const errorMessages = elements.contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(error => error.classList.remove('show'));
        }, 2000);
    }
    
    // Form Validation
    function validateForm(data) {
        let isValid = true;
        
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            showError('name', 'Please enter a valid name (minimum 2 characters)');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        if (!data.subject || data.subject.trim().length < 5) {
            showError('subject', 'Please enter a subject (minimum 5 characters)');
            isValid = false;
        }
        
        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            showError('message', 'Please enter a message (minimum 10 characters)');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Validate Individual Field
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldName = field.name;
        
        clearError(e);
        
        switch (fieldName) {
            case 'name':
                if (value.length > 0 && value.length < 2) {
                    showError('name', 'Name must be at least 2 characters long');
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value.length > 0 && !emailRegex.test(value)) {
                    showError('email', 'Please enter a valid email address');
                }
                break;
            case 'subject':
                if (value.length > 0 && value.length < 5) {
                    showError('subject', 'Subject must be at least 5 characters long');
                }
                break;
            case 'message':
                if (value.length > 0 && value.length < 10) {
                    showError('message', 'Message must be at least 10 characters long');
                }
                break;
        }
    }
    
    // Show Error Message
    function showError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        const field = document.getElementById(fieldName);
        if (field) {
            field.style.borderColor = '#FF6B35';
        }
    }
    
    // Clear Error Message
    function clearError(e) {
        const fieldName = e.target.name;
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        
        e.target.style.borderColor = '';
    }
    
    // Show Success Message
    function showSuccessMessage(message = 'Success!') {
        const messageEl = document.createElement('div');
        messageEl.className = 'success-message';
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #00FF88;
            color: #0D1117;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
            word-wrap: break-word;
        `;
        messageEl.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        
        document.body.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 5000);
    }
    
    // Handle Window Resize
    function handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && elements.navMenu && elements.navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
    
    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Error Handling
    window.addEventListener('error', (e) => {
        console.error('DevPortfolio-Pro Error:', e.error);
    });
    
    // Performance Monitoring
    window.addEventListener('load', () => {
        // Log performance metrics
        if (window.performance) {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`DevPortfolio-Pro loaded in ${loadTime}ms`);
        }
    });
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export for debugging (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.DevPortfolioPro = {
            data: DATA,
            elements: elements,
            renderProjects: renderProjects,
            renderSkills: renderSkills,
            renderBlogPosts: renderBlogPosts,
            filterProjects: filterProjects,
            animateStats: animateStats,
            animateSkillBars: animateSkillBars
        };
    }
    
})();