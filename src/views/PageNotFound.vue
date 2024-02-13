<template>
<div class="row">
      <h1>404: Page Not Found</h1>
      <p>Sorry we can't find that page!</p>
</div>

</template>

<script>
export default {
    name: "PageNotFound"
}
</script>

<style scoped>
h1{
    padding-top: 8%;
}
.row{
    min-height: 70vh;
}

@media only screen and (max-width: 613px){
  h1{
    padding-top: 100px;
  }

}


</style>