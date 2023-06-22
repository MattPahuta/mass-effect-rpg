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
  render();
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