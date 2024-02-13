<template>

  <div class="row testemonial">
      <div class="col-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="row g-0">
              <div class="col-2 "></div>
              <div class="col-8 ">
                <div class="carousel-item active">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                        "I was thoroughly happy with the customer
                        service. They responded to my call right
                        away and came to quote the job on the
                        same day. They were flexible with my
                        schedule and did a fantastic job!"
                    </blockquote>
                  </figure>
                  <h3>Jake Collingwood</h3>
                </div>
                <div class="carousel-item">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                        "I am so relieved to have M&R come and
                        help with my situation. They were discreet,
                        efficient, and took the time to explain all the
                        required steps. Would highly recommend!"
                    </blockquote>
                  </figure>
                  <h3>Elise Shepard</h3>
                </div>
                <div class="carousel-item">
                  <figure class="text-center">
                    <blockquote class="blockquote">
                        "So happy I went with these young men.
                            They worked very hard and got the job done
                            on short notice." <br><br>
                    </blockquote>
                  </figure>
                  <h3>Nadine Cowley</h3>
                </div>
              </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <h1><i class="bi bi-caret-left-fill" aria-hidden="true"></i></h1>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <h1><i class="bi bi-caret-right-fill" aria-hidden="true"></i></h1>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>
     </div>
    </div>

    </div>

</template>

<script>
export default {
    name: 'AppTestimonials'
}
</script>

<style scoped>
.testemonial{
  padding: 3% 5% 1% 5%;

}
.testemonial h3{
  color: rgb(43, 195, 84);
}
i{
  color: rgb(43, 195, 84);
  margin: 5px 10px 5px 5px;
}



@media only screen and (max-width: 713px){

.blockquote{
  font-size: 1.15rem;
}
.testemonial h3{
  font-size: 1.3rem;
}
}

@media only screen and (max-width: 575px){

  .blockquote{
  font-size: 1rem;
}
.testemonial h3{
  font-size: 1.2rem;
}
}

@media only screen and (max-width: 466px){
  .blockquote{
  font-size: 0.9rem;
}
.testemonial h3{
  font-size: 1.1rem;
}
}

@media only screen and (max-width: 373px){
  .blockquote{
  font-size: 0.85rem;
}
.testemonial h3{
  font-size: 1.05rem;
}

}
</style>
