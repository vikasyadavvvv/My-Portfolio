document.addEventListener('DOMContentLoaded', function () {
    // Get the links for navigation
    var aboutLink = document.getElementById('aboutnav');
    var projectLink = document.getElementById('Projectsnav');
    var contactLink = document.getElementById('Contactnav');
    
    // Get the corresponding sections
    var aboutSection = document.getElementById('aboutme');
    var projectSection = document.getElementById('projects');
    var contactSection = document.getElementById('contactme');
    
    // Function to scroll smoothly to a section
    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    }
    
    // Add click event listeners to the navigation links
    aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(aboutSection);
    });

    projectLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(projectSection);
    });

    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(contactSection);
    });
});
