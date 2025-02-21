// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar(); // Initialize sidebar

    function initializeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menu-toggle');
        const closeBtn = document.getElementById('close-btn');
        const navLinks = document.querySelectorAll('.nav-links a');

        // Open sidebar
        menuToggle.addEventListener('click', (e) => {
            sidebar.style.width = '120px';
            e.stopPropagation(); // Prevent click from propagating to document
        });

        // Close sidebar
        closeBtn.addEventListener('click', () => {
            sidebar.style.width = '0';
        });

        // Close sidebar when any link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.style.width = '0';
            });
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && e.target !== menuToggle) {
                sidebar.style.width = '0';
            }
        });
    }
}); 