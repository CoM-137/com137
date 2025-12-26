// Dark Mode Management
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Update Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth entry animations for cards are handled by CSS (fadeIn)
// but we can add more interactivity here if needed.

// Hover effects for cards handled by CSS for performance.

console.log('Collegium of Minds static site initialized.');