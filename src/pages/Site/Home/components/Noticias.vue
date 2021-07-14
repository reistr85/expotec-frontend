<template>
  <section id="noticias-section" class="barra-amarela">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12 text-white">
          <h2 class="text-white">Notícias</h2>
          <Divisor />
          <p>Fique por dentro das principais notícias sobre os eventos relacionados com a Expotec, além de desafios e oportunidades oferecidas por parceiros, bem como Hackatons e muito mais.</p>
        </div>
      </div>
    </div>
    <!-- Carousel wrapper -->
<div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark"
  data-mdb-ride="carousel"
>


  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active" >
      <div class="container">
    <div class="row text-center col-md-12" >
      <div class="col-md-3" v-for="i in noticias" :key="i.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">PREMIAÇÃO</h5>
            <p class="card-text">
              {{i.title}}
            </p>
            <router-link :to="{name: 'noticias',params:{id: i.id}}" class="text-white"><button type="button" class="btn btn-warning">Saiba mais</button></router-link>
          </div>
        </div>
      </div>
    </div>
      <!--<div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">SAÚDE</h5>
            <p class="card-text">
              IFRN realiza Mostra de Ações da Saúde.
              Evento acontece nos dias 29 e 30 de março,
              para profissionais de saúde e
            </p>
            <button type="button" class="btn btn-warning">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">EXTENSÃO</h5>
            <p class="card-text">
              Caminhos cruzados: projeto leva alunos da rede pública municipal
              ao CNAT Iniciativa fomenta criticidade, novos
            </p>
            <button type="button" class="btn btn-warning">Saiba mais</button>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">INTERINSTITUCIONAL</h5>
            <p class="card-text">
              IFRN é parceiro em evento sobre Eletrônica de Potência
              Congresso Nacional pretende reunir comunidade latino
            </p>
            <button type="button" class="btn btn-warning">Saiba mais</button>
          </div>
        </div>
      </div>-->
    </div>
    </div>
    </div>

    <!-- Single item 
    <div class="carousel-item">
      <div class="container">
    <div class="row text-center col-md-12">
    
    </div>
    </div>
    </div>
  </div>-->
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselDarkVariant"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselDarkVariant"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Carousel wrapper -->

<!--<h1 v-for="i in eventos" :key="i.id">{{ i.description }}</h1>-->


  </section>
</template>
<script>
import Divisor from "@/components/Divisor/Divisor";

// import axios from 'axios';

export default {
  data() {
    return {
      noticias: [],
      filter: ''
    }
  },
  components: {
    Divisor
  },

  mounted() {
    this.$http.get('https://expotec.api.mgetech.com.br/api/expotec/v1/news')
      .then(res => {
        console.log(res.body);  
        this.noticias = res.body
      })
  }  
};
</script>
<style lang="scss" scoped>
@import "../style.scss";

.barra-amarela {
  background-color: $amarelo-color;
  padding-bottom: 100px;
  .card {
    .card-body {
      height: 300px;
      padding-top: 40px;
    }
    .col-md-3 {
      margin-bottom: 15px;
    }
  }
}
.carousel-control-next{
  border:none;
  background-color: transparent;
  color:white;
}
.carousel-control-prev{
  border:none;
  background-color: transparent;
  color:white;
}
</style>