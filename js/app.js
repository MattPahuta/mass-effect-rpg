// *********************** //
// *** Mass Effect RPG *** //
// *********************** //

import characterData from "./data.js";
import Character from "./Character.js";


// attack button
function attack() {
  console.log('attacking!'); // debug
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (wizard.dead || orc.dead) endGame();
}

// end of game behavior
function endGame() {
  console.log('Game Over'); // debug
  // const endMessage = wizard.health === 0 && orc.health === 0 ? 'Nobody wins in war - everyone is dead'
  //   : wizard.health > 0 ? 'Hero wins the day'
  //   : 'The monster wins. You are dead.'
  const endMessage = wizard.dead && !orc.dead ? 'The monster wins. You are dead.'
  : !wizard.dead && orc.dead ? 'Hero wins the day'
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
  document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}


document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();