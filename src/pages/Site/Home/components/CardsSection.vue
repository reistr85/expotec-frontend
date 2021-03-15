<template>
      <section id="cards">
    <div class="container">
      <div class="row text-center">
          <h2 class=" col-md-12">Sobre</h2>
          <Divisor/>
      </div><br>
      <div class="row">
          <div class="col-md-12 text-center">
              <p>
                  A Exposição Científica, Tecnológica e Cultural do Campus Natal-Central do Instituto Federal do RN - EXPOTEC - é um evento anual realizado no âmbito dos campi tendo como objetivo a submissão e divulgação de projetos científicos, oferta de minicursos, oficinas e palestras de caráter educacional, estreitar parcerias público-privadas, bem como a promoção de atividades artístico-culturais. O evento é promovido pela Pró-Reitoria de Extensão, assessorada pele Divisão de Extensão do campus.
              </p>
          </div>
          
      </div><br><br>

      <div class="row">
          <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="@/assets/images/avatar.jpg" alt="" class="img-fluid" style="width:60px;heigth:60px;border-radius:50%">
                        </div>
                        <div class="col-md-8"><br>
                            <h6>Lorem ipsum</h6>
                            <p>text to build</p>
                        </div>
                    </div>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
               </div>
               </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                <div class="card-body" id="card-central">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="@/assets/images/avatar.jpg" alt="" class="img-fluid" style="width:60px;heigth:60px;border-radius:50%">
                        </div>
                        <div class="col-md-8"><br>
                            <h6>Lorem ipsum</h6>
                            <p>text to build</p>
                        </div>
                    </div>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
  
               </div>
               </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="@/assets/images/avatar.jpg" alt="" class="img-fluid" style="width:60px;heigth:60px;border-radius:50%">
                        </div>
                        <div class="col-md-8"><br>
                            <h6>Lorem ipsum</h6>
                            <p>text to build</p>
                        </div>
                    </div>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>

               </div>
               </div>
          </div>
      </div>
      
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

.card-body{
  border-radius: 10px;
}

#card-central{
  color:white;
  background-color:$roxo-color;
}
</style>
