document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const yOffset = -60; 
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      });
    });
  });
  