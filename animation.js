document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.3  // Trigger the animation when 30% of the section is in view
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
