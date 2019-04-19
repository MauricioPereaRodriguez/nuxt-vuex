<template>
  <div>
    <!--<h1>{{ $store.state.titulo }}</h1>-->
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
    <button @click="cambioTitulo">Cambiar titulo</button>
    <br>
    <input type="text" v-model="sub" placeholder="Cambiar subtitulo">
    <button @click="cambio">Cambiar subtitulo</button>
    <br><br>
    <table>
      <th>User</th>
      <th>Username</th>
      <tr v-for="(item, index) in personas" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.username}}</td>
      </tr>
    </table>
    <button @click="get">Ejectuar acción</button>
    <br>
    <h2>Número de personas: {{ contador }}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data(){
    return {
      sub: ''
    }
  },
  computed: {
    ...mapState(['titulo', 'subtitulo', 'personas']),
    ...mapGetters(['contador'])
  },
  methods:{
    ...mapMutations(['cambioTitulo']),
    ...mapActions(['get']),
    cambio(){
      this.$store.commit('cambioSubtitulo', this.sub)
    }
  },
  created() {
    this.$store.dispatch('get')
  }
}
</script>
