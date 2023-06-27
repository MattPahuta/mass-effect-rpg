// *********************** //
// *** Mass Effect RPG *** //
// *********************** //

import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ['orc', 'demon', 'goblin'];

// get next opponent
function getNewMonster() {
  // assign nextMonsterData to first el in monsters array
  // get the right object from characterData using bracket syntax 
  const nextMonsterData = characterData[monstersArray.shift()];
  // return monstersArray.length < 1 ? {} : new Character(nextMonsterData)
  return monstersArray.length ? new Character(nextMonsterData) : {};
}

// attack button
function attack() {
  console.log('attacking!'); // debug
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || monster.dead) endGame();
}

// end of game behavior
function endGame() {
  console.log('Game Over'); // debug
  // const endMessage = wizard.health === 0 && monster.health === 0 ? 'Nobody wins in war - everyone is dead'
  //   : wizard.health > 0 ? 'Hero wins the day'
  //   : 'The monster wins. You are dead.'
  const endMessage = wizard.dead && !monster.dead ? `The ${monster.name} wins. You are dead.`
  : !wizard.dead && monster.dead ? 'Hero wins the day'
  : 'Nobody wins in war. Everyone is dead.'

  const endEmoji = wizard.health > 0 ? '🔮' : '☠️'
  document.getElementById('game-container').innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>` 

  console.log(endMessage)
}

// render characters 
function render() {
  // apply character card html to the DOM
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
  document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}


document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();

render();