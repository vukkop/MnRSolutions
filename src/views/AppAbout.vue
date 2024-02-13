<template>
<h1>Meet us</h1>
  <div class="row first">
    <div class="col-12">

    </div>

    <div class="col-6 col-sm-7">
      <h3>Our Team</h3>
      <p class="first">Our team of experts pride themselves with today’s top training and methods used in
        the industry. Our passion for helping others is shown through the time and patience we take
        to explain to our customers what needs to be done in the most green and efficient way possible.
      </p>
      <div class="card">
        <h4>Service Areas:</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div class="col">
            <ul class="areas">
              <li>Vancouver</li>
              <li>North Vancouver</li>
              <li>West Vancouver</li>
              <li>Burnaby</li>
              <li>Coquitlam</li>

            </ul>
          </div>
          <div class="col">
            <ul>
              <li>Richmond</li>
              <li>Delta</li>
              <li>Surrey</li>
              <li>Pitt Meadows</li>
              <li>White Rock</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>Langley</li>
              <li>Abbotsford</li>
              <li>Mission</li>
              <li>Chilliwack</li>
              <li>Squamish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-5">
      <img src="../assets/AboutPagePhotos/img1.jpg" class="photo1 rounded img-thumbnail"
          alt="Biohazard disinfection">
    </div>


  </div>
  <div class="row second">
    <div class="col-6">

    </div>
    <div class="col-6">

      <p class="second">

      </p>
    </div>
  </div>
  <div class="row third justify-content-evenly">
    <div class="col-6 col-sm-5 col-md-5">
      <h4 class="name">Marc</h4>
      <p class="marc">“I think hoarding disorders and mental illness is something many people really struggle with
         today. I have met many kind and loving people that have to deal with these issues in their life.
          I am truly proud to get to help people everyday.”
      </p>
    </div>
    <div class="col-6 col-sm-5 col-md-5">
      <h4 class="name">Robbie</h4>
      <p class="robbie">"I am very proud to be able to help individuals, friends and loved ones
        whether it be from a hoarding, sanitation or the passing of a loved one.
        I am passionate and considerate about the work I do. Ability to help
        people take the next step in there lives, makes my work very rewarding."
      </p>
    </div>
  </div>

</template>

<script>


export default {
  name: 'AppAbout',
  components: {

  }
}
</script>

<style scoped>
.row.first{
  padding: 2% 5% 2% 5%;
}
h1{
  margin: 2% 2% 5% 2%;
}
.card {
  padding: 2%;
  margin: 2% 2% 2% 2%;
  background-color: whitesmoke;
}
h3{
  text-align: left;
  margin-top: 3%;
}
p.first{
  text-align: left;
  padding-bottom: 5%;
}
h4{
  text-align: left;
}
ul {
  /* list-style-type: none; */
  text-align: left;
}
.photo2{
  max-width: 50vw;
}
.photo1{
  max-height: 70vh;
  margin: 2% 2% 2% 2%;
}
.row.second{
  padding: 0% 0% 0% 0%;
}

.row.third{
  padding: 0% 5% 2% 5%;
}
.name{
  text-align: center;
}




@media only screen and (max-width: 767px){
  .photo1{
    margin-top: 182px;
    max-height: 53vh;
}
  p.first{
    margin-right: -245px;
  }
}

@media only screen and (max-width: 670px){
  .photo1{
    margin-top: 180px;
    max-height: 52vh;
}

}

@media only screen and (max-width: 642px){
  .photo1{
    margin-top: 184px;
    max-height: 54vh;
}
}
@media only screen and (max-width: 620px){
  .photo1{
    margin-top: 177px;
    max-height: 50vh;
  }
  li{
    font-size: 0.95rem;
  }
}
@media only screen and (max-width: 575px){
  div.col{
    margin-top: 0px
  }
  ul{
    margin-bottom: 0px;
  }
  .areas{
    margin-top: 20px;
  }
  .photo1{
    margin-top: 195px;
    max-height: 59vh;
  }
  .marc{
    padding-right: 2%;
  }
  .robbie{
    padding-left: 2%;
  }

.row.third{
  padding: 0% 2% 2% 2%;
}
}
@media only screen and (max-width: 478px){
    .photo1{
    margin-top: 190px;
  }
  p.first{
    margin-right: -230px;
  }
}
@media only screen and (max-width: 450px){
  p{
    font-size: 0.9rem;
  }
    p.first{
    margin-right: -210px;
  }
    .photo1{
  margin-top: 176px;
  }

}

@media only screen and (max-width: 420px){
  p.first{
    margin-right: -180px;
  }
  .photo1{
  margin-top: 197px;
  }
}
@media only screen and (max-width: 420px){
  p.first{
  margin-right: -170px;
  }
  .photo1{
  margin-top: 194px;
  }
}

</style>
