<template>
  <div id="app">
    <Headers></Headers>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
  import Headers from './components/header/Header'
  import Tab from './components/tab/Tab'
  import Player from './components/player/Player'

  export default {
    name: 'app',
    components: {
      Headers,Tab,Player
    }
  }
</script>

<style scoped lang="stylus">

</style>
