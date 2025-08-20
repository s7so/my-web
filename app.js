// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Register the GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // --- INTRO SECTION ANIMATION ---
    // Animate the h1 and p on page load
    gsap.from("#intro h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
    gsap.from("#intro p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    // --- HUSSEIN METHOD SECTION ANIMATION ---
    // Create a timeline for the t-shirt animations
    const methodTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#method",
            start: "top center", // When the top of the section hits the center of the viewport
            toggleActions: "play none none none" // Play the animation once
        }
    });

    // Add animations to the timeline
    // The ".t-shirt" elements will scale in and fade in, one after the other
    methodTimeline.from(".t-shirt", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.3 // Add a 0.3s delay between each t-shirt animation
    });

    // --- CONTACT SECTION ANIMATION ---
    // Animate the elements in the contact section when it comes into view
    gsap.from("#contact h2, #contact p, #contact a", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: targetId,
                    offsetY: 70 // Offset for the fixed header
                },
                ease: 'power2.inOut'
            });
        });
    });
});
