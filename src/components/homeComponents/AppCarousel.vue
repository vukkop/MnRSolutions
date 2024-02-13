<template>

    <div class="row carousel">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/HomeCarouselPhotos/photo1.jpeg" class="d-block w-100" alt="Blood cleanup">
                <div class="carousel-caption d-none d-md-block">
                    <!-- <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p> -->
                </div>
                </div>
                    <div class="carousel-item">
                        <img src="../../assets/HomeCarouselPhotos/photo2.jpeg" class="d-block w-100" alt="Odour treatment">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo3.jpeg" class="d-block w-100" alt="Vaccuming">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo4.jpeg" class="d-block w-100" alt="Moping">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo5.jpeg" class="d-block w-100" alt="Toilete feces cleanup">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo6.jpeg" class="d-block w-100" alt="Hoard">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo7.jpeg" class="d-block w-100" alt="Junk">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/HomeCarouselPhotos/photo8.jpeg" class="d-block w-100" alt="Cleaning supplies">
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> -->
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


</template>

<script>
export default {
    name: 'AppCarousel'
}
</script>

<style scoped>

.carousel .slide {
    height: 100%;
}
.carousel-item {
    height: 60%;
}
.first {
    margin-top: 3%;
}
@media only screen and (max-width: 767px){
    .carousel {
    padding: 0% 7%;
}
    .carousel-control-next-icon{
        margin-right: 20px;
    }
    .carousel-control-prev-icon{
        margin-left: 20px;
    }
}
@media only screen and (max-width: 500px){
    .carousel {
    padding: 0% 3%;
    }
}

</style>
