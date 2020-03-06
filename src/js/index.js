import 'bootstrap'
import '../scss/main.scss'

import * as Episode from './episode/episode'
import * as Character from './character/character'

const seriesBtns = document.querySelectorAll('.series-btn')
seriesBtns.forEach(btn => btn.addEventListener('click', selectSeries))

function selectSeries() {
  Episode.showSeasons(this.value)
}

const seasonBtns = document.querySelectorAll('.season-btn')
seasonBtns.forEach(btn => btn.addEventListener('click', selectSeason))

function selectSeason() {
  Episode.getEpisodeList(this.value)
}
/*
const paginationBtns = document.getElementById('season-table-pagination')
paginationBtns.addEventListener('click', function(e) {
  e.preventDefault()
  Episode.changePage(e.target.value)
})
*/

const villageBtns = document.querySelectorAll('.village-btn')
villageBtns.forEach(btn => btn.addEventListener('click', selectVillage))

function selectVillage() {
  Character.showCharacters(this.value)
}
