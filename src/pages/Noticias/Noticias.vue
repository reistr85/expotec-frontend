<template>
    <section>
          <div class="container">
          <div class="row text-center">
              <div class="col-md-12 ">
                  <h2>Notícias</h2>
                <Divisor/>
                <p>Fique por dentro das principais notícias sobre os eventos relacionados com a Expotec,  além de desafios e oportunidades oferecidas por parceiros, bem como Hackatons e muito mais. </p>
              </div>                
          </div>
          </div>
          <div class="col-md-12 barra-amarela" >
              <!-- Carousel wrapper -->
              <div class="container">
<div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"></li>
  </ol>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                        </p>
                        <button type="button" class="btn btn-warning">Learn more</button>
                    </div>
                    </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                        </p>
                        <button type="button" class="btn btn-warning">Learn more</button>
                    </div>
                    </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                        </p>
                        <button type="button" class="btn btn-warning">Learn more</button>
                    </div>
                    </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                        </p>
                        <button type="button" class="btn btn-warning">Learn more</button>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <a
    class="carousel-control-prev"
    href="#carouselBasicExample"
    role="button"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselBasicExample"
    role="button"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
</div>
<!-- Carousel wrapper -->

          </div>
         
    </section>
</template>
<script>
import Divisor from '../../components/Divisor';

export default {
    
    components:{
        Divisor
    }
    
}
</script>
<style lang="scss" src="./style.scss" scoped>