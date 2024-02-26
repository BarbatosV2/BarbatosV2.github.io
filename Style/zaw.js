// zaw.js
const body = document.body;

function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change the GitHub icon based on the theme
    const githubIcon = document.querySelector('.github-icon img');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    githubIcon.src = `Logos/Github-Logos/github-mark-${theme}.png`;

    // Change the GitHub icon based on the theme
    fluxIcon.src = `Logos/Flux/flux-robotics-${theme}.png`;
}
