import {characters} from '../../data/characters.js'

const characterTemplate = require('.././hbs-templates/character-cards.hbs')

const characterCards = document.getElementById('character-cards')

function showCharacters(village) {
  characterCards.innerHTML = characterTemplate(characters[village])
}

export { showCharacters }
