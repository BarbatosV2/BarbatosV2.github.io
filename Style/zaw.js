const body = document.body;

function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change the GitHub icon based on the theme
    const githubIcon = document.querySelector('.github-icon img');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    githubIcon.src = `Logos/Github-Logos/github-mark-${theme}.png`;

    // Change the theme mode text
    const themeModeText = document.getElementById('theme-mode');
    themeModeText.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
}

// Initial setting for the theme mode text
document.addEventListener('DOMContentLoaded', function() {
    const themeModeText = document.getElementById('theme-mode');
    themeModeText.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
});