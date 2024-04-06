const body = document.body;

function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change the GitHub icon based on the theme
    const githubIcon = document.querySelector('.github-icon img');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    githubIcon.src = `Logos/Github-Logos/github-mark-${theme}.png`;

    // Change the GitHub icon based on the theme for the projects section
    const githubIconProjects = document.querySelectorAll('#projects .github-logo');
    githubIconProjects.forEach(icon => {
        icon.src = `Logos/Github-Logos/github-mark-${theme}.png`;
    });

    const catImage = document.getElementById('catImage');
    catImage.src = `Logos/cat/cat_${theme}.png`;

    // Change the theme toggle text
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';

    // Change the copyright text color based on the theme
    const copyrightText = document.querySelector('#copyright p');
    const textColor = body.classList.contains('dark-theme') ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    copyrightText.style.color = textColor;
    
    // Change colors for hamburger menu and navigation buttons
    const hamburgerBars = document.querySelectorAll('.hamburger-menu .bar');
    const navButtons = document.querySelectorAll('#navbar a');
    const themeColor = body.classList.contains('dark-theme') ? '#fff' : '#333';
    hamburgerBars.forEach(bar => {
        bar.style.backgroundColor = themeColor;
    });
    navButtons.forEach(button => {
        button.style.color = themeColor;
    });
    slidingBar.style.backgroundColor = body.classList.contains('dark-theme') ? '#2c2c2c' : '#fff';

}

const dynamicWords = ["Machine learning", "AI", "3D modeling", "Web Development", "Computer Vision", "Data Science"]; // Words to display dynamically
const typingSpeed = 50; // Speed of typing in milliseconds
const deletingSpeed = 30; // Speed of deleting in milliseconds
const pauseBeforeDelete = 1000; // Pause duration before deleting in milliseconds
const typingDelay = 1000; // Delay before starting typing in milliseconds
let currentIndex = 0; // Index of the current word being typed

// Function to display text with typewriter effect
function typeWriter(text, element, speed, deleting, callback) {
    let i = 0;
    const typeInterval = setInterval(() => {
        if (deleting) {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                element.innerHTML = '<span class="red-text">' + element.textContent + '</span>'; // Apply red color during deletion
            } else {
                clearInterval(typeInterval);
                if (callback) callback();
            }
        } else {
            if (i < text.length) {
                element.innerHTML += '<span class="red-text">' + text.charAt(i) + '</span>'; // Apply red color during typing
                i++;
            } else {
                clearInterval(typeInterval);
                if (callback) callback();
            }
        }
    }, speed);
}

// Function to change the dynamic text
function changeDynamicText() {
    currentIndex = (currentIndex + 1) % dynamicWords.length; // Move to the next word
    const dynamicText = document.getElementById('dynamicText');
    setTimeout(() => {
        typeWriter(dynamicText.textContent, dynamicText, deletingSpeed, true, () => {
            dynamicText.textContent = ''; // Clear the current dynamic text
            typeWriter(dynamicWords[currentIndex], dynamicText, typingSpeed, false, changeDynamicText); // Start typing the next word
        });
    }, pauseBeforeDelete);
}

// Start typing after a delay
setTimeout(() => {
    changeDynamicText();
}, typingDelay);

// Function to toggle the menu and change the hamburger icon to X
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (navbar.classList.contains('active')) {
      // If the menu is currently active, close it
      navbar.classList.remove('active');
      hamburgerMenu.classList.remove('open');
      navbar.style.right = '-250px'; // Slide the menu back to the right
    } else {
      // If the menu is currently inactive, open it
      navbar.classList.add('active');
      hamburgerMenu.classList.add('open');
      navbar.style.right = '0'; // Slide the menu to the left
    }
  }
  