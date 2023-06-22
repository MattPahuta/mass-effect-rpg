// Character data
const characterData = {
  hero: {
    name: 'Wizard',
    avatar: './assets/wizard.png',
    health: 60,
    diceCount: 3,
    currentDiceScore: []
  },
  monster: {
    name: 'Orc',
    avatar: './assets/orc.png',
    health: 10,
    diceCount: 1,
    currentDiceScore: []
  }
}

// use a default export here because characterData will be the only thing in this data file
export default characterData