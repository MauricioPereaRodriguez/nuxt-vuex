import axios from 'axios'

export const state = () => ({
  titulo: 'Mi primer nuxt con vuex',
  subtitulo: 'Soy un subtitulo',
  personas: []
})

export const mutations = {
  cambioTitulo(state){
    state.titulo = 'Cambio del titulo'
  },
  cambioSubtitulo(state, valor){
    state.subtitulo = valor
  },
  llenar(state, valor){
    state.personas = valor
  }
}

export const actions = {
  async get({commit}){
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        commit('llenar', res.data)
      })
  }
}

export const getters = {
  contador(state){
    return state.personas.length
  }
}
