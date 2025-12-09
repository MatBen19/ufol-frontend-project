/**
 * Hamburger menu toggle functionality
 * Handles mobile navigation menu open/close interactions
 */
(function() {
    'use strict';
    
    // Cache DOM elements
    const hamburger = document.querySelector(".nav__hamburger");
    const menu = document.querySelector(".nav__menu");
    const body = document.body;
    
    // Early return if required elements don't exist
    if (!hamburger || !menu) {
        console.warn('Navigation elements not found');
        return;
    }
    
    /**
     * Toggles the mobile navigation menu state
     * @param {Event} event - Click event
     */
    function toggleMenu(event) {
        event.preventDefault();
        
        const isOpen = menu.classList.contains("nav__menu--open");
        
        // Toggle menu visibility
        menu.classList.toggle("nav__menu--open");
        hamburger.classList.toggle("nav__cross");
        body.classList.toggle("no-scroll");
        
        // Update ARIA attribute for accessibility
        hamburger.setAttribute('aria-expanded', !isOpen);
        hamburger.setAttribute('aria-label', isOpen ? 'Otevřít menu' : 'Zavřít menu');
    }
    
    /**
     * Closes menu when Escape key is pressed
     * @param {KeyboardEvent} event - Keyboard event
     */
    function handleEscapeKey(event) {
        if (event.key === 'Escape' && menu.classList.contains("nav__menu--open")) {
            toggleMenu(event);
        }
    }
    
    // Initialize ARIA attributes
    hamburger.setAttribute('aria-expanded', 'false');
    
    // Event listeners
    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("keydown", handleEscapeKey);
    
    // Close menu when clicking on a menu link (better mobile UX)
    const menuLinks = menu.querySelectorAll('.nav__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains("nav__menu--open")) {
                toggleMenu(new Event('click'));
            }
        });
    });
})();