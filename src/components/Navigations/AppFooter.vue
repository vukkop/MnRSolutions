<template>
  <div class="row first">
      <div class="col-md-6 col-sm-6 ">
          <!-- <img class="img-fluid float-start" src="../../assets/FooterPhotos/iicrcLogo.png" alt="IICRC Certified">
          <h3>Residental Cleaning</h3>
          <ul>
              <li>Biohazard Cleanup</li>
              <li>Biohazard Cleanup</li>
              <li>Biohazard Cleanup</li>
              <li>Biohazard Cleanup</li>
          </ul> -->
      </div>
      <!-- <div class="col-3">
          <h3>Commercial Cleaning</h3>
          <ul>
              <li>Commercial Window Cleaning</li>
              <li>Carpet Cleaning</li>
              <li>Biohazard Cleanup</li>
              <li>Biohazard Cleanup</li>
          </ul>
      </div> -->
      <div class="spacer col-md-2 col-sm-1">
          <!-- <h3>Resources</h3>
          <ul>
              <li>FAQ's</li>
              <li>Cleaning Products</li>
              <li>Subscribe to our Newsletter </li>
              <li>Testimonials</li>
          </ul> -->
      </div>
      <div class="col-md-4 col-sm-5">
          <h3>Get in Touch</h3>
          <ul>
            <!-- <li>SOCIAL ICONS</li> -->
            <li><a class="call" href="tel:+16042601455">Phone: <strong>1-604-260-1455</strong></a></li>
            <li class="address">Vancouver, British Columbia</li>
           </ul>
      </div>
  </div>
  <div class="row bottom">
      <h6>© 2022 All Rights Reserved www.mnrsolutions.ca</h6>
  </div>
</template>

<script>
export default {

    name: "AppFooter"

}
</script>

<style scoped>

.row{
  padding: 2% 4% 2% 4%;
  align-items: left;
  background-color: rgb(175, 175, 175);

}

img{
    margin-top: 2%;
    max-height: 80px;
}

h3{ font-weight: 500;
    text-align: right;
}
ul {
  padding: 0%;
  list-style-type: none;
  text-align: right;
}
div.row.bottom{
    padding: 1% 1%;
    align-items: center;
    background-color: rgb(110, 110, 110)
}


@media only screen and (max-width: 621px){
    img{
    margin-top: 5%;
    max-height: 70px;
    }

}



@media only screen and (max-width: 575px){
    h3{
        margin-top: -70px;
    }
    ul {
       margin-top: -5px;
    }
    img{
    margin-top: 2%;
    max-height: 60px;
    }
    .row.first{
    height: 130px;
    padding: 10% 4% 0% 4%;
    }
}

@media only screen and (max-width: 440px){
    h3{
    margin-top: -60px;
    }
    ul {
    margin-top: -5px;
    }
    img{
    margin-top: 2%;
    max-height: 60px;
    padding-top: 10px;
    }

}
</style>

