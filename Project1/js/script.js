// Add interactivity for the search input

// Select the input element
const searchInput = document.querySelector('input');

// Add event listener for when the user types in the search bar
searchInput.addEventListener('focus', () => {
    searchInput.style.backgroundColor = '#ffebeb'; // Lighten input background on focus
});

searchInput.addEventListener('blur', () => {
    searchInput.style.backgroundColor = ''; // Remove the highlight on blur
});

// Animation for the header to appear on page load
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transition = 'opacity 1s';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 200);
});


