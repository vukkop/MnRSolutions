<template>
    <div class="row">


    <div v-for="testimonial in testimonials" :key="testimonial.id" 
        class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        <div class="card">
            <h5 class="card-header">{{testimonial.name}}</h5> 
            <div class="card-body">

                <p class="card-text">{{testimonial.content}}</p>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
    </div>

</div>
</template>

<script>


export default {
    name: "TestimonialCard",

    data: function() {
        return {
        testimonials: [
            {
                id: 1,
                name: "Colleen Denman",
                content: "M&R Solutions were professional, caring, and sensitive in dealing with an unexpected situation. Their quick response from quote to job completion was much appreciated. I would highly recommend them and will use them again. Thank you so much Marc & Robbie."
            },
            {
                id: 2,
                name: "Lisa Irwin",
                content: "Marc and Robbie from M&R solutions are amazing! They helped me restore a 1400 square foot condo in Vancouver quickly and efficiently. The unit had been sorely neglected for several years. The occupant was a hoarder and smoker with hygiene issues. The gentlemen were hardworking, industrious, timely, kind and thorough while coming in on budget even when I requested additional services. Some of the pieces were quite heavy and would have been impossible for me to move. Robbie and Marc over delivered at every step in the process, proposed solutions that I had not considered and we're even able to salvage 2 major appliances that I believed would have to be replaced which saved the estate a significant amount of time and money. I was overwhelmed by their generosity and how thorough they were. Their rates were beyond reasonable; I promise you will not be disappointed if you engage them in service.",
            },
            {
                id: 3,
                name: "Dorian Volkman",
                content: "M&R solutions did an amazing job removing all debris and cleaning all areas of a house that I could never do on my own. They showed up early and didn't leave until the job was complete. Excellent service and timing and very respectful to my every request. 10 out of 10 would highly recommend.",
            },
            {
                id: 4,
                name: "Ashley Pepper",
                content: "Used M&R for a last minute job. They were very professional and efficient with everything. Would highly recommend to anyone looking for their services.",
            },
            {
                id: 5,
                name: "Jake Collingwood",
                content: "I was thoroughly happy with the customer service. They responded to my call right away and came to quote the job on the same day. They were flexible with my schedule and did a fantastic job!",
            },
            {
                id: 6,
                name: "Elise Shepard",
                content: "I am so relieved to have M&R come and help with my situation. They were discreet, efficient, and took the time to explain all the required steps. Would highly recommend!",
            },
            {
                id: 7,
                name: "Nadine Cowley",
                content: "So happy I went with these young men. They worked very hard and got the job done on short notice.",
            },
            ]
        }
    }
}

</script>


<style scoped>
.card{
    margin: 2%;
}
.bi-star-fill{
    color: gold;
    padding: 0px 2px;
}
</style>


