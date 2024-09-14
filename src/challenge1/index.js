import { day1Function } from './day1.js';
import { day2Function } from './day2.js';

document.addEventListener('DOMContentLoaded', () => {
  const challengeContentDiv = document.getElementById('challenge-content');
  day1Function()
  challengeContentDiv.innerHTML = `
    <h3>Day 1</h3>
    <h3>Day 2</h3>
    <p>${day2Function()}</p>
  `;
});
