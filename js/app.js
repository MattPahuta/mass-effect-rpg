// *********************** //
// *** Mass Effect RPG *** //
// *********************** //

import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ['orc', 'demon', 'goblin'];
let isWaiting = false;

// get next opponent
function getNewMonster() {
  // assign nextMonsterData to first el in monsters array
  // get the right object from characterData using bracket syntax 
  const nextMonsterData = characterData[monstersArray.shift()];
  // nextMonsterData evaluate true? get new character, otherwise return empty object
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

// attack button
function attack() {
  if (!isWaiting) { // if game is not in a waiting state, run the following code
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();
  
    if (wizard.dead) { // hero dead?
      endGame(); // end the game
    } else if (monster.dead) { // hero alive and monster dead?
        isWaiting = true; // enable game state to waiting
        if (monstersArray.length) { // anymore monsters to fight?
          setTimeout(() => { // wait a second or so...
            monster = getNewMonster(); // yes? get anotha one, assign to monster
            console.log(monster)
            render(); // render the monster
            isWaiting = false; // re-enable attack ability
          }, 1500);
        } else {
          endGame();
      }
    }
  }

}

// end of game behavior
function endGame() {
  isWaiting = true; // enable game state to waiting

  const endMessage = wizard.dead && !monster.dead ? `The ${monster.name} wins. You are dead.`
  : !wizard.dead && monster.dead ? 'Hero wins the day'
  : 'Nobody wins in war. Everyone is dead.'

  const endEmoji = wizard.health > 0 ? '🔮' : '☠️'

  setTimeout(() => { // wait a 1.5 seconds...
    document.getElementById('game-container').innerHTML = `
      <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
      </div>` 
  }, 1500);
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