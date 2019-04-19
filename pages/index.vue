<template>
  <section class="container">
    <!--<h1>{{ $store.state.titulo }}</h1>-->
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
    <button @click="cambioTitulo">Cambiar titulo</button>
    <br>
    <input type="text" v-model="sub" placeholder="Cambiar subtitulo">
    <button @click="cambio">Cambiar subtitulo</button>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data(){
    return {
      sub: ''
    }
  },
  computed: {
    ...mapState(['titulo', 'subtitulo'])
  },
  methods:{
    ...mapMutations(['cambioTitulo']),
    cambio(){
      this.$store.commit('cambioSubtitulo', this.sub)
    }
  }
}
</script>
