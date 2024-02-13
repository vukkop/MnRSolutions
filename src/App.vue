<template>
  <header>
    <NavBar />
  </header>
  <body>
    <router-view/>
  </body>
  <footer>
    <AppFooter/>
  </footer>
</template>

<script>
import NavBar from './components/Navigations/NavBar.vue'
import AppFooter from './components/Navigations/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
},
}
</script>


<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.row {
  --bs-gutter-x: 0 rem;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: rgb(59, 59, 59)
}
</style>
