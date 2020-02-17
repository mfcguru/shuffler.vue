<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <div class="container py-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './shared/navbar.component'

export default {
  name: 'app',
  components: {
    NavbarComponent
  }
}
</script>


<style>
</style>
