import 'bootstrap'
import '../scss/main.scss'

import * as Episode from './episode/episode'

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

const paginationBtns = document.getElementById('season-table-pagination')
paginationBtns.addEventListener('click', function(e) {
  e.preventDefault()
  Episode.changePage(e.target.value)
})
