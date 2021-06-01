<template>
    <!--<div class="row pt-5 text-center">
      <div class="col-md-12 pt-5 mt-5">
        <h1 class="text-white mt-5">Hyper Festival retorna a SP trazendo o que há de mais atual em realidade aumentada e virtual</h1>
      <a href="/#/noticias"><button class="btn btn-primary">Saiba mais</button></a>
      </div>
    </div>-->
    <!-- Carousel wrapper -->
    <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <img
            src="../../../../assets/images/Imagem1.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 class="text-white">Hyper Festival retorna a SP trazendo o que há de mais atual em realidade aumentada e virtual</h1>
      <a href="/#/noticias"><button class="btn btn-primary">Saiba mais</button></a>
          </div>
        </div>
        <!-- Single item 
        <div class="carousel-item">
          <img
            src="@/assets/images/certificado.svg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>-->
      </div>
      
      <!-- Inner -->

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../style.scss";

/*section{
  background-image: url('../../../../assets/images/Imagem1.jpg');
  background-position: center;
  background-size:cover;
  height: 600px;
}*/
#texto-secundario {
  font-weight: bold;
  color: white;
}
.carousel-inner{
  .carousel-item {
    img{
      height: 700px; 
    } 
  }
}
.carousel-control-next{
  border:none;
  background-color: transparent;
  color:#FBA31B;
}
.carousel-control-prev{
  border:none;
  background-color: transparent;
  color:#FBA31B;
}
</style>