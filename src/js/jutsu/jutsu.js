import {jutsu} from '../../data/jutsu-info.js'

const jutsuTemplate = require('.././hbs-templates/jutsu-cards.hbs')

const jutsuCards = document.getElementById('jutsu-cards')

function showJutsu(type) {
  jutsuCards.innerHTML = jutsuTemplate(jutsu[type])
}

export { showJutsu }
