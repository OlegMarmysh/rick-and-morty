import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})

export const charactersAPI = {
  getCharacters (number) {
    return instance.get(`character/?page=${number}`)
  },
  getCharacter (id) {
    return instance.get(`character/${id}`)
  }
}

export const episodeAPI = {
  getEpisode (id) {
    return instance.get(`episode/${id}`)
  }
}

export const getId = (item) => {
  return item.match(/([0-9]+)$/g)
}
