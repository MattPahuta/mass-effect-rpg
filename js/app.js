// *********************** //
// *** Mass Effect RPG *** //
// *********************** //

import characterData from "./data.js";
import Character from "./Character.js";


// render characters 
function render() {
  // apply character card html to the DOM
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
  document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();