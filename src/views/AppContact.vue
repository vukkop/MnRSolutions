<template>
<div class="row first">
  <div class="col-12">
    <h1>Contact <br> M&R Solutions</h1>
  </div>
</div>
<div class="row second">

    <div class="col-md-6 col-sm-6">

      <div class="callButton">
        <a href="tel:+16042601455">
          <h4><strong>Call us for a free quote</strong></h4>
          <h4>Phone: <strong>1-604-260-1455</strong></h4>
        </a>
      </div>

      <div class="callButton">
        <a class="call" href="mailto:info@mnrsolutions.ca">
          <h4><strong>Get in touch with us via email</strong></h4>
          <h4>Email: <strong>info@mnrsolutions.ca</strong></h4>
        </a>
      </div>
    </div>

    <div class="right col-md-6 col-sm-6">
      <h3><strong>Hours of operation:</strong></h3>
      <h5>Monday - Friday: 8:00AM - 8:00PM</h5>
      <br>
      <h3><strong>Location:</strong></h3>
      <h5>Vancouver, British Columbia</h5>
    </div>
<!-- <Form/> -->
</div>



    <router-link to="/">
        <img class="hiRes-logo" src="../assets/M&RSolutionsHiRes.png" alt="mnrsolutions">
    </router-link>

</template>

<script>
// import Form from '../components/contactComponents/Form.vue'

export default {
  name: 'AppContact',
  components: {
    // Form,

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
.row.second{
  padding: 0% 5% 2% 5%;

}

.hiRes-logo{
  /* margin-top: -60px; */
  margin-top: 5vh;
  width: 17vw;
  padding-bottom: 10px;
}
.callButton{
  text-align: left;
  padding: 10px;
  background-color: rgb(43, 195, 84);
  border-radius: 10px;
  margin-bottom: 3%;
}
.callButton :hover{
  /* transition-duration: 0.3s;
  background-color: rgb(32, 146, 62);
  transform: scale(1.1); */
  color: white;
  transition-duration: 0.3s;
}
.right{
  padding-left: 10px;
}


@media only screen and (max-width: 608px){
  h4{
    font-size: 1.3rem;
  }
  .hiRes-logo{
  width: 20vw;
  }
  h3{
    font-size: 1.4rem;
  }
  h5{
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 575px){
  h4{
    font-size: 1.4rem;
  }
  .hiRes-logo{
  width: 25vw;
  }
  h3{
    font-size: 1.5rem;
  }
  h5{
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 420px){
  h1{
  margin: 7% 2% 5% 2%;
}

}

</style>
