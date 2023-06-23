import { getDicePlaceholderHtml, getDiceRollArray } from "./utils.js";

// Character constructor function
function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount)

  // v2
  this.getDiceHtml = function(diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount) // assign each char's currDiceScore to getDiceRollarr
    this.diceArray = this.currentDiceScore.map((num) => { // map over currentDiceScore arr, assign to diceArray
      return `<div class="dice">${num}</div>` // generate html element for each num
     }).join(''); // join the array into a new string
  }
  
  // v1 
  // this.getDiceHtml = function(diceCount) { // generate dice roll html
  //   return getDiceRollArray(diceCount).map(num => { // map over array from getDiceRollArray
  //     return `<div class="dice">${num}</div>` // generate html element for each num
  //   }).join(''); // join the array into a new string
  // }

  // take damage from opponent
  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((acc, currAttack) => {
      return acc + currAttack
    })
    console.log(`${this.name} takes ${attackScoreArray} damage`); // debug
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }

  }

  this.getCharacterHtml = function() {
    const { name, avatar, health, diceCount, diceArray } = this;
    // let diceHtml = this.getDiceHtml(diceCount);
    return ` 
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}">
        <div class="health">health: ${health}</div>
        <div class="dice-container">${diceArray}</div>
      </div>
    `
  }

}

export default Character