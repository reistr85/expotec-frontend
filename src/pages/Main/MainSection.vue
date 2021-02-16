<template>
      <div id="main">
<!-- Carousel wrapper -->
<div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark"
  data-mdb-ride="carousel"
>
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"></li>
  </ol>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active">
      <img
        src="../../assets/Imagem1.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h1>EXPOTEC - IFRN </h1>
        <h1 id="texto-secundario">Ciência, Tecnologia e cultura</h1>
        <button type="button" class="btn btn-primary">Entrar</button>
        

    </div>
    </div>
    </div>

   
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <a
    class="carousel-control-prev"
    href="#carouselDarkVariant"
    role="button"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselDarkVariant"
    role="button"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
<!-- Carousel wrapper -->
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" src="./style.scss" scoped>