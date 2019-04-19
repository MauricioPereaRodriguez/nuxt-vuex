export const state = () => ({
  titulo: 'Mi primer nuxt con vuex',
  subtitulo: 'Soy un subtitulo'
})

export const mutations = {
  cambioTitulo(state){
    state.titulo = 'Cambio del titulo'
  },
  cambioSubtitulo(state, valor){
    state.subtitulo = valor
  }
}
