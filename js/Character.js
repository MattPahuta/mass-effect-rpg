import { getDiceRollArray } from "./utils.js";

// Character constructor function
function Character(data) {
  Object.assign(this, data);

  this.getCharacterHtml = function() {
    const { elementId, name, avatar, health, diceCount } = this;
    let diceHtml = this.getDiceHtml(diceCount);

    return ` 
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}">
        <div class="health">health: ${health}</div>
        <div class="dice-container">${diceHtml}</div>
      </div>
    `
  }

  this.getDiceHtml = function(diceCount) { // generate dice roll html
    return getDiceRollArray(diceCount).map(num => { // map over array from getDiceRollArray
      return `<div class="dice">${num}</div>` // generate html element for each num
    }).join(''); // join the array into a new string
  }

}

export default Character