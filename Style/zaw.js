// zaw.js
const body = document.body;

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change the GitHub icon based on the theme
    const githubIcon = document.querySelector('.github-icon img');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    githubIcon.src = `Logos/Github-Logos/github-mark-${theme}.png`;

    // Change the copyright text color based on the theme
    const copyrightText = document.querySelector('#copyright p');
    const textColor = body.classList.contains('dark-theme') ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    copyrightText.style.color = textColor;
}
