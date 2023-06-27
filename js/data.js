// Character data
const characterData = {
  hero: {
    name: 'Wizard',
    avatar: './assets/wizard.png',
    health: 50,
    diceCount: 3,
    currentDiceScore: []
  },
  orc: {
    name: 'Orc',
    avatar: './assets/orc.png',
    health: 25,
    diceCount: 2,
    currentDiceScore: []
  },
  demon: {
    name: "Demon",
    avatar: "images/demon.png",
    health: 25,
    diceCount: 2,
    currentDiceScore: []
  },
  goblin: {
      name: "Goblin",
      avatar: "images/goblin.png",
      health: 20,
      diceCount: 3,
      currentDiceScore: []
  },
}

// use a default export here because characterData will be the only thing in this data file
export default characterData