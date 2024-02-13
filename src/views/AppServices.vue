<template>

<div class="row first justify-content-evenly">
    <div class="col-12">
      <h1>Services We Provide</h1>
    </div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
  <div class="col">
      <div class="card">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img1.jpg" alt="Trauma cleaning">
        <h4 class="card-title">Trauma Cleaning</h4>
        <p class="card-text">Crime and trauma scenes, which may involve blood and other potentially
          infectious material.

        </p>
      </div>
  </div>
  <div class="col">
      <div class="card">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img2.jpg" alt="Biohazard disposal">
        <h4 class="card-title">Biohazard Cleanup</h4>
        <p class="card-text">Material that may be left behind at the scene of a crime or
          accident, professional trauma cleaners offer full biohazard removal services.
          This includes blood and other bodily fluids, as well as any other biohazard material
          that may be present on the scene.
        </p>
      </div>
  </div>
  <div class="col">
      <div class="card">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img4.jpg" alt="Hoarding">
        <h4 class="card-title">Hoarding Cleanup</h4>
        <p class="card-text">Sparate items that are to be kept such as photos documents and
          other belongings while also removing and disposal of garbage, debris and unwanted furniture.
        </p>
      </div>
  </div>
  <div class="col">
      <div class="card bottom">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img3.jpg" alt="Disinfection fogging">
        <h4 class="card-title">Disinfection</h4>
        <p class="card-text">Disinfecting kills viruses and bacteria on surfaces using "green" chemicals.
        </p>
      </div>
  </div>

  <div class="col">
      <div class="card bottom">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img5.jpg" alt="Junk Removal">
        <h4 class="card-title">Junk Removal</h4>
        <p class="card-text">Is the process of getting old, unwanted items removed from
          your property.
        </p>
      </div>
      </div>
  <div class="col">
      <div class="card bottom">
        <img class="card-img-top" src="../assets/ServicesPagePhotos/img6.jpg" alt="Demolition Cleanup">
        <h4 class="card-title">Demolition Cleanup</h4>
        <p class="card-text">Clean up and removal of drywall, tiles, flooring, cabinets pre
          renovation item removal.
        </p>
      </div>
  </div>
</div>
</div>


</template>

<script>


export default {
  name: 'AppServices',

}
</script>

<style scoped>

.col{
  padding: 0% 3% 0% 3%;
}
.card{
  height: 100%;
  background-color: whitesmoke;
}
img:hover{
  padding: 0% 0% 0% 0%;
  margin-bottom: 0%;
  transition-duration: 0.4s;

}
img {
  /* max-height: 60%; */
  padding: 10% 10% 0% 10%;
  margin-bottom: 2%;
}
.card-text{
  padding: 0px 5px;
}
.row.first{

  padding: 2% 8% 2% 8%;
}
h1{
  margin: 2% 2% 2% 2%;
  padding: 0% 0% 0% 3%;
}

@media only screen and (max-width: 575px){
  .row.first{
    padding: 2% 20% 10% 20%;
  }
}

@media only screen and (max-width: 500px){
  h1{
  padding: 0% 0% 0% 8%;
  }
}

@media only screen and (max-width: 460px){
  .row.first{
    padding: 2% 15% 10% 15%;
  }
  h1{
  padding: 0% 0% 0% 15%;
  }
}

</style>
