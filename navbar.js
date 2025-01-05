document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Change menu icon to X when open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            mobileMenuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    });

    // Mobile dropdowns
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown button');
    mobileDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            const content = e.currentTarget.nextElementSibling;
            content.classList.toggle('hidden');
            const icon = e.currentTarget.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    });
}); 