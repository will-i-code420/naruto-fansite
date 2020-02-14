import {narutoEpisodes} from '../../data/naruto-episodes.js'
import {shippuudenEpisodes} from '../../data/shippuuden-episodes.js'

const episodeTableTemplate = require('.././hbs-templates/episode-table.hbs')

const tablePaginationTemplate = require('.././hbs-templates/table-pagination.hbs')

const seasonTable = document.getElementById('season-table')
const paginationContainer = document.getElementById('season-table-pagination')


let currentSeries = 'naruto'
let episodes = []
let episodeList = []
const numPerPage = 10
let currentPage = 1
let numOfPages = 1


const showSeasons = series => {
  seasonTable.classList.remove('active-season-table')
  seasonTable.innerHTML = ''
  paginationContainer.innerHTML = ''
  const currentSeriesDisplay = document.getElementById(`${currentSeries}`)
  const seriesToDisplay = document.getElementById(`${series}`)
  currentSeriesDisplay.classList.remove('active-series')
  seriesToDisplay.classList.add('active-series')
  currentSeries = series
}

const getEpisodeList = season => {
  if (currentSeries === 'naruto') {
    episodeList = narutoEpisodes[season]
  } else if (currentSeries === 'shippuuden') {
    episodeList = shippuudenEpisodes[season]
  } else {
    episodeList = "need to create boruto"
  }
  createPaginationInfo()
}

function createPaginationInfo() {
  let pageBtns = []
  // get number of pages
  numOfPages = Math.ceil((episodeList.length - 1) / numPerPage)
  // set number of pagination buttons to create
  for (let i = 1; i <= numOfPages; i++) {
    pageBtns.push({page: i})
  }
  paginationContainer.innerHTML = tablePaginationTemplate(pageBtns)
  createEpisodePages()
}

function createEpisodePages() {
  let start = ((currentPage - 1) * numPerPage)
  const end = start + numPerPage
  episodes = episodeList.slice(start, end)
  createEpisodeTable()
}

function createEpisodeTable() {
  seasonTable.innerHTML = episodeTableTemplate(episodes)
  seasonTable.classList.add('active-season-table')
}

function changePage(btn) {
  switch (btn) {
    case 'first':
    firstPage()
    break;
    case 'prev':
    prevPage()
    break;
    case 'next':
    nextPage()
    break;
    case 'last':
    lastPage()
    break;
    default:
    jumpPage(btn);
  }
}

function firstPage() {
  if (currentPage === 1) {
    return
  }
  currentPage = 1
  createEpisodePages()
}

function nextPage() {
  if (currentPage === numOfPages) {
    return
  }
  currentPage += 1
  createEpisodePages()
}

function lastPage() {
  if (currentPage === numOfPages) {
    return
  }
  currentPage = numOfPages
  createEpisodePages()
}

function prevPage() {
  if (currentPage === 1) {
    return
  }
  currentPage -= 1
  createEpisodePages()
}

function jumpPage(page) {
  currentPage = parseInt(page)
  createEpisodePages()
}

export { showSeasons, getEpisodeList, changePage }
