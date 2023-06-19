// *** Mass Effect RPG *** //
// *********************** //


// character data
const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: './assets/wizard.png',
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
}

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: './assets/orc.png',
  health: 10,
  diceRoll: [2],
  diceCount: 1,
}

function renderCharacter(data) {
  // destructure data object, assign variables
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  // build dice html with map and join
  let diceHtml = diceRoll.map(dice => {
    return `<div class="dice">${dice}</div>`
  }).join('')


  document.getElementById(elementId).innerHTML = `
    <div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}">
      <div class="health">health: ${health}</div>
      <div class="dice-container">${diceHtml}</div>
    </div>
  `

}

renderCharacter(hero);
renderCharacter(monster);