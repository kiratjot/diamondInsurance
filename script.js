// Select all elements with the 'count' class
const counters = document.querySelectorAll('.count');

// Define the speed of the counting animation
const speed = 60; // Lower number = faster counting

// Iterate over each counter element
counters.forEach(counter => {
    // Function to update the count value
    const updateCount = () => {
        // Get the target number from the data-target attribute
        const target = +counter.getAttribute('data-target');
        // Get the current number
        const count = +counter.innerText;

        // Calculate the increment
        const increment = target / speed;

        // Check if the current count is less than the target
        if (count < target) {
            // Update the counter value
            counter.innerText = Math.ceil(count + increment);
            // Call the function again to continue counting
            setTimeout(updateCount, 20);
        } else {
            // If the count has reached the target, set the counter to the exact target value
            counter.innerText = target;
        }
    };

    // Call the updateCount function to start the animation
    updateCount();
});

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Scroll event to trigger the animation when in view
window.addEventListener('scroll', () => {
    counters.forEach(counter => {
        if (isInViewport(counter)) {
            updateCount(counter);
        }
    });
});

