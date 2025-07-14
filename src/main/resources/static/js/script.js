// Add 'loading' class and lock scroll
document.body.classList.add('loading');
document.body.style.overflow = 'hidden'; // Disable scroll during loader

// Fallback timeout (5s) in case window.load fails
const fallbackTimeout = setTimeout(() => {
    finishLoading();
}, 5000);

// When all assets are loaded
window.addEventListener('load', () => {
    clearTimeout(fallbackTimeout); // Cancel fallback if load works
    setTimeout(() => {
        finishLoading();
    }, 2000); // Keep loader visible for 2s minimum
});

// Loader hide logic
function finishLoading() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.style.opacity = '0'; // Start fade out
        setTimeout(() => {
            loader.style.display = 'none'; // Remove loader completely
            document.body.classList.remove('loading'); // Reveal content
            document.body.style.overflow = 'auto'; // Enable scroll
        }, 500); // Wait for fade to finish
    }
}