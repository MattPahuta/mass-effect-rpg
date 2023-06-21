// *** Mass Effect RPG *** //
// *********************** //


// character data
const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: './assets/wizard.png',
  health: 60,
  diceCount: 3,
}

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: './assets/orc.png',
  health: 10,
  diceCount: 1,
}

// Character constructor
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

const wizard = new Character(hero);
const orc = new Character(monster);

// Generate a random dice roll array, based on diceCount parameter
function getDiceRollArray(diceCount) {
  // build new array, populate with zero placeholder val, map over and replace with the random roll result
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

// render characters 
function render() {
  // apply character card html to the DOM
  document.getElementById(wizard.elementId).innerHTML = getCharacterHtml();
  document.getElementById(orc.elementId).innerHTML = getCharacterHtml();
}

render();