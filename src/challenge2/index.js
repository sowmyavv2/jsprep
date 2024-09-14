import { day1Function } from './day1.js';
import { day2Function } from './day2.js';

document.addEventListener('DOMContentLoaded', () => {
  const challengeContentDiv = document.getElementById('challenge-content');

  challengeContentDiv.innerHTML = `
    <h3>Day 1</h3>
    <p>${day1Function()}</p>
    <h3>Day 2</h3>
    <p>${day2Function()}</p>
  `;
});
