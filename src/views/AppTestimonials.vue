<template>
    <div class="row first">
      <div id="top" class="col-12">
        <h1>Testimonials</h1>
      </div>
    </div>
    <div class="contaner">
        <testimonial-card/>
    </div>
    <div class="row second justify-content-evenly">
        <div class="col-5">
            <router-link class="btn btn-primary btn-lg button1" to="/" role="button">BACK <i class="bi bi-house-fill"></i></router-link>
        </div>
        <div class="col-5">
            <router-link class="btn btn-primary btn-lg button1" to="#top" role="button">TO TOP <i class="bi bi-caret-up-fill"></i></router-link>
        </div>
    </div>



        <router-link to="/">
            <img class="hiRes-logo" src="../assets/M&RSolutionsHiRes.png" alt="mnrsolutions">
        </router-link>

    </template>

    <script>
import TestimonialCard from '../components/testimonialsComponents/testimonialCard.vue';


    export default {
      name: 'AppTestimonials',
      components: {
        TestimonialCard,
      },
    }
    </script>
    <style scoped>
    .row.first{
      padding: 2% 5% 2% 5%;
    }
    h1{
      margin: 2% 2% 4% 2%;
    }
    .row.second{
      padding: 0% 5% 2% 5%;

    }
    .btn.btn-primary{
    background-color: rgb(6, 153, 171);
    border-color: rgb(6, 153, 171);
    }
    .btn.btn-primary:hover{
    transition: 0.3s;
    background-color: rgb(69, 185, 201);
    border-color: rgb(69, 185, 201);

    }

    .hiRes-logo{
      /* margin-top: -60px; */
      margin-top: 5vh;
      width: 17vw;
      padding-bottom: 10px;
    }

    @media only screen and (max-width: 650px){
      .btn.btn-primary{
        font-size: smaller;
      }

    }
    @media only screen and (max-width: 608px){

      .hiRes-logo{
      width: 20vw;
      }

      h1{
      margin: 2% 2% 5% 2%;
    }
    }

    @media only screen and (max-width: 420px){
      h1{
      margin: 7% 2% 5% 7%;
    }
    @media only screen and (max-width: 386px){
      h1{
      margin: 8% 2% 5% 7%;
      }
    }
    }

    </style>
