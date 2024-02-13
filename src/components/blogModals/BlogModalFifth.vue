<template>
    <div class="modal fade" id="BlogModalFifth" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content ">
        <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">
                <a href="https://vancouver.ca/green-vancouver/zero-waste-vancouver.aspx" 
                target="_blank" rel="noopener noreferrer">Supporting Waste Reduction In Vancouver</a>
            </h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                       

                        <img src="../../assets/BlogPhotos/photo9.jpg" alt="" class="img1 float-end rounded img-thumbnail">
                        <p>
                            The city of Vancouver developed a strategic plan called Zero Waste 40.
                            The goal is to be a zero waste community by 2040.
                            As a city they are committed to conserving resources, preventing all types of waste.
                        </p>

                        <h5>
                            <a href="https://www.epa.gov/recycle/recycling-basics" 
                            target="_blank" rel="noopener noreferrer">Benefits of Recycling</a>
                        </h5>
                        
                        <p>
                            <br>    •	<a href="https://mnrsolutions.ca/#/about" 
                                        target="_blank" rel="noopener noreferrer">Reduces the amount of waste sent 
                                        to landfills and incinerators</a>
                            <br>    •	Conserves natural resources such as timber, water and minerals
                            <br>    •	Increases economic security by tapping a domestic source of materials
                            <br>    •	Prevents pollution by reducing the need to collect new raw materials
                            <br>    •	Saves energy
                        </p>

                        <h5><a href="https://recyclebc.ca/what-can-i-recycle/" 
                            target="_blank" rel="noopener noreferrer">What can be recycled in BC</a></h5>
                        <br>
                        
                        <p><strong>- <a href="https://en.wikipedia.org/wiki/Recycling" 
                            target="_blank" rel="noopener noreferrer">Recycling</a> in Paper bin or reusable yellow bag:</strong></p>
                        <p>
                                    •	Paper
                            <br>    •   Paper packaging and Cardboard
                        </p>

                        <p><strong>- <a href="https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling" 
                            target="_blank" rel="noopener noreferrer">Recycle</a> in Container Bin:</strong></p>
                        <p>
                                    •	Plastic Containers
                            <br>    •	Cartons and paper cups
                            <br>    •	Aluminum containers
                            <br>    •	Steel containers
                        </p>

                        <p><strong>- <a href="https://www.regionalrecycling.ca/vancouver-recycling-depot/" 
                            target="_blank" rel="noopener noreferrer">Recycle at Depot or in Glass only Bin:</a></strong></p>
                        <p>
                                    •	Glass Bottle and Jars
                        </p>

                        <p><strong>- Recycle at Depot Only:</strong></p>
                        <p>
                                    •	Plastic bags and overwrap
                            <br>    •	Foam packaging
                            <br>    •	Other flexible plastic packaging
                        </p>
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
    name: 'BlogModalFifth',
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
    width: 30%;
    margin: 0% 1% 1% 1%;
}
.img2{
    width: 35%;
    margin: 1% 1% 1% 1%;
}




@media only screen and (max-width: 576px){
p{
    font-size: 0.9rem;
}
}



</style>