import { getDicePlaceholderHtml, getDiceRollArray, getHealthPercentage } from "./utils.js";

// Character constructor function
function Character(data) {
  Object.assign(this, data); // assign all the properties of data to this (the new object)
  this.maxHealth = this.health; // set maxHealth to initial character health
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  // handle building the html for the rolled dice
  this.getDiceHtml = function(diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount) // assign each char's currDiceScore to getDiceRollArray
    this.diceArray = this.currentDiceScore.map(num => // map over currentDiceScore arr, assign to diceArray
      `<div class="dice">${num}</div>`).join(''); // generate html element for each num, join the array into a new string
  }

  // handle taking damage from opponent
  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((acc, currAttack) => acc + currAttack);
    console.log(`${this.name} takes ${attackScoreArray} damage`); // debug
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  }
  // handle building the character health bar
  this.getHealthBarHtml = function() {
    const percent = getHealthPercentage(this.health, this.maxHealth);
    console.log(percent); // debug

    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''}" 
        style="width: ${percent}%;">
        </div>
      </div>`
  }
  // handle building the character card html
  this.getCharacterHtml = function() {
    const { name, avatar, health, diceCount, diceArray } = this;
    const healthBar = this.getHealthBarHtml()

    return ` 
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}">
        <div class="health">health: ${health}</div>
        ${healthBar}
        <div class="dice-container">
          ${diceArray}
        </div>
      </div>
    `
  }
}

export default Character