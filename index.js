// index.js

// Example JavaScript code
console.log("Hello, World!");

// Manipulating the DOM
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (root) {
        root.textContent = "This is a plain JavaScript example in index.js!";
    }
});

function loadChallenge(contentDiv, challengePath) {
    fetch(challengePath)
      .then(response => response.text())
      .then(data => {
        contentDiv.innerHTML = data;
      })
      .catch(error => console.error('Error loading challenge:', error));
  }
  
  function route() {
    const hash = window.location.hash || '#challenge1';
    const contentDiv = document.getElementById('content');
  
    switch (hash) {
      case '#challenge1':
        loadChallenge(contentDiv, 'src/challenge1/index.html');
        break;
      case '#challenge2':
        loadChallenge(contentDiv, 'src/challenge2/index.html');
        break;
      default:
        contentDiv.innerHTML = '<h2>Welcome to 100 Days of JavaScript</h2>';
        break;
    }
  }
  
  // Listen for hash changes and initial page load
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);
  