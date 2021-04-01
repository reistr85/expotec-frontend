<template>
    <section class="barra-amarela">
          <div class="container">
          <div class="row text-center">
              <div class="col-md-12 text-white">
                <h2 class="text-white">Notícias</h2>
                <Divisor/>
                <p>Fique por dentro das principais notícias sobre os eventos relacionados com a Expotec,  além de desafios e oportunidades oferecidas por parceiros, bem como Hackatons e muito mais. </p>
              </div>                
          </div>
          </div>
          <div class="col-md-12 " >
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
                                  <h5 class="card-title">PREMIAÇÃO</h5>
                                  <p class="card-text">
                                  Estudante é medalha de bronze em Olimpíada Brasileira de Robótica.
Evento é considerado o maior de robótica da América Latina e acontece
                                  </p>
                                  <button type="button" class="btn btn-warning">Saiba mais</button>
                              </div>
                              </div>
                      </div>
                      <div class="col-md-3">
                          <div class="card">
                              <div class="card-body">
                                  <h5 class="card-title">SAÚDE</h5>
                                  <p class="card-text">
                                  IFRN realiza Mostra de Ações da Saúde.
Evento acontece nos dias 29 e 30 de março,
para profissionais de saúde e assistência social.
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
ao CNAT Iniciativa fomenta criticidade, novos horizontes
e parceria com
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
Congresso Nacional pretende reunir comunidade latino-americana
interessada na           </p>
                                  <button type="button" class="btn btn-warning">Saiba mais</button>
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
import Divisor from '@/components/Divisor/Divisor';

export default {
    
    components:{
        Divisor
    }
    
}
</script>
<style lang="scss" scoped>
@import '../style.scss';

.barra-amarela{
    background-color: $amarelo-color;

    .carousel-inner{
        padding: 80px 30px;
    }

    .card-body{
      height: 300px;
    }
}

</style>