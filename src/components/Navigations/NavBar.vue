<template>
<div class="row">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
        <img class="logo" src="../../assets/M&RSolutionsHiRes.png" alt="mnr solutions logo">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link first" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">ABOUT</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/services">SERVICES</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">BLOG</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </div>

</nav>
</div>
</template>

<script>
export default {
    name: 'NavBar'

}
</script>

<style scoped>
.logo {
  background-color: rgb(248, 249, 250);
  position: absolute;
  width: 170px;
  padding:  10px 10px 10px 10px;
  border-radius:  0px 0px 20px 0px;
  top: 0%;
  left: 0%;
  z-index: 100;
}
.navbar-brand {
  width: 200px !important;
  padding: 0px;
}
.nav-link {
    font-size: 1.3rem;
    font-weight: 700;
    color: rgb(6, 153, 171) !important;
    margin-left: 40px;
    margin-top: 8px;
    padding: 0px;
}
.nav-link:hover {
    color: rgb(43, 195, 84) !important;
}
.first {
    margin-left: 50px;
}
nav.navbar.navbar-expand-lg.navbar-light.bg-light{
  padding-right: 0px;
}
.navbar-toggler{
  margin-right: 2%;
}



@media only screen and (max-width: 683px){
  .logo {
  width: 150px;
  }
}


@media only screen and (max-width: 575px){
  .logo {
    width: 120px;
  }

}
</style>