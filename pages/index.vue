<template>
  <section class="container">
    <!--<h1>{{ $store.state.titulo }}</h1>-->
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['titulo', 'subtitulo'])
  }
}
</script>
