<template>
    <div class="modal fade" id="BlogModalSecond" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content ">
        <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">Steps to Help With Hoarding Disorder</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h4>Where to start when dealing with hoarding situation?</h4>

                        <img src="../../assets/BlogPhotos/photo6.jpg" alt="" class="img1 float-end rounded img-thumbnail">
                        <h5>Hoarding disorders affect family and friends.</h5>
                            
                
                        <h5>Hoarding disorder defined</h5>
                        <p>
                            •	Persistent difficulty discarding or parting with possessions, regardless of their actual value.
                        </p>
                        <p>   
                            •	This difficulty is due to a perceived need to save the items and to distress associated with discarding them.
                        </p>    
                        <figure class="text-start">
                            <figcaption class="blockquote-footer">
                                <a href="https://en.wikipedia.org/wiki/Hoarding#:~:text=A.,distress%20associated%20with%20discarding%20them" 
                                    target="_blank" rel="noopener noreferrer">To learn more click here</a>
                            </figcaption>
                        </figure>
                        
                        <p>
                            •	People with hoarding disorder have an excessive attachment to their belongings, even seemingly worthless
                            or unusable ones. They feel comforted buying and accumulating things, but greatly distressed if they 
                            ever try to discard them. This can lead to a cluttered, unsanitary, and unsafe living environment 
                            
                        </p>
                        <figure class="text-start">
                            <figcaption class="blockquote-footer">
                                <a href="https://www.helpguide.org/articles/anxiety/helping-someone-with-hoarding-disorder.htm" 
                                    target="_blank" rel="noopener noreferrer">To learn more click here</a>
                            </figcaption>
                        </figure>

                        <h5>Ways to help a loved one in the beginning</h5>

                        <h6>•	Step 1: Listening</h6>
                        <p>
                            One of the most powerful means of supporting an individual who hoards is to simply listen without judgment.
                        </p>

                        <img src="../../assets/BlogPhotos/photo5.jpg" alt="" class="img2 float-end rounded img-thumbnail">
                        <h6>•	Step2: Exercise Patients</h6>
                        <p>
                            While it may be difficult at times to understand why someone cannot part with a particular object that 
                            may seem like junk to you, hold your tongue and realize that they may not be ready to part with that item
                            just yet.
                        </p>

                        
                        
                        <h6>•	Step 3: Encourage them to seek help</h6>
                        <p> 
                            Ask if they would like help in locating and selecting a therapist. If they are torn between the desire to
                            seek help and the fear of talking to a stranger about such a personal matter, offer to go along for a session
                            or two as moral support.
                        </p>
                        <figure class="text-start">
                            <figcaption class="blockquote-footer">
                                <a href="https://www.wikihow.com/Help-a-Hoarder" 
                                    target="_blank" rel="noopener noreferrer">To learn more click here</a>
                            </figcaption>
                        </figure>
                        <h6>
                            <a href="https://mnrsolutions.ca/#/contact" 
                                target="_blank" rel="noopener noreferrer">
                                •	Step 4: Contact profesionals with experience to help with cleanup and disposal.</a>
                        </h6>
                    
                    </div>
                </div>
            </div>
        </div>        
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'BlogModalSecond',
    components: { 

      },

}
</script>

<style scoped>
h4{
    text-align: left;
    margin-bottom: 30px;
}
h5{
    text-align: left;
    margin-top: 25px;
}
h6{
    text-align: left;
     margin-top: 25px;
}
p{
    text-align: left;
}
a{
    /* text-decoration: underline; */
    color: rgb(6, 153, 171);
}
a:hover{
    color: rgb(69, 185, 201);
}
.blockquote-footer::before{
    color: rgb(6, 153, 171);
}
.img1{
    width: 40%;
    margin: 0% 1% 1% 1%;
}
.img2{
    width: 40%;
    margin: 1% 1% 1% 1%;
}





@media only screen and (max-width: 576px){
p{
    font-size: 0.9rem;
}
}
</style>