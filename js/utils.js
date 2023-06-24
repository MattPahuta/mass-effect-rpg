// import characterData from "./data.js";

// Generate a random dice roll array, based on diceCount parameter
function getDiceRollArray(diceCount) {
  // build new array, populate with zero placeholder val, map over and replace with the random roll result
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

// Generate placeholder html for the dice roll
function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`
  }).join('')
}

// Get health bar percentage, return % of maximum health remaining
// *** change to getHealthPercentage, change to function declaration?
const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;

// use a named export because more functions will live in the utils file
export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }