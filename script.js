// Get reference to the scroll-to-top button element
const scrollBtn = document.getElementById("scrollToTop");

// Add event listener for scroll events on the window 
window.addEventListener('scroll', () => {
    //check if user has scrolled more than 300 pixels from top
    if(window.pageYOffset > 300) {
        // Add "show" class to make button visible
        scrollBtn.classList.add("show");
    } else {
        // Remove 'show' class to hide the button
        scrollBtn.classList.remove("show")
    }
});

// Add click event listener to the button
scrollBtn.addEventListener('click', () => {
    // Scroll to top with smooth animation
    window.scrollTo({
        top:0, //scroll to y position 0 (top)
        behavior: "smooth" // use smooth scroll animation
    });
});

// Add keyboard support for accessibility
scrollBtn.addEventListener('keydown', (e) => {
    // Trigger click on Enter or Space key
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Prevent default space scroll
        scrollBtn.click(); // Trigger the click event
    }
});