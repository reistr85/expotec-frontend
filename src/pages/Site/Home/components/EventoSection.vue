<template>
      <section  id="eventos-section">
          <div class="container">
          <div class="row text-center">
                <h2 class=" col-md-12">Eventos</h2>
                <Divisor/>
                <p>Está interessado em participar de nossos eventos agora, saber o que vai acontecer em breve ou o que rolou em edições anteriores? Saiba tudo isso e muito mais aqui! </p>
          </div><br><br>
          <div class="row">
          <div class="col-md-4">
                <div class="card">
                <img
                    src="@/assets/images/workshopPesquisaInovacao.png"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">DIPEQ promove "Workshop de Pesquisa e Inovação</h5>
                    <p class="card-text">
                    No próximo dia 05 de março, a partir das 8h30, a Diretoria de Pesquisa (Dipeq) do Campus Natal-Central do IFRN, vai promover o “Workshop de Pesquisa e Inovação”.
                    </p>
                    <a href="/#/eventos" class="btn btn-success">Saiba mais</a>
                </div>
                </div>
          </div>
          <div class="col-md-8">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec09.jpg"
                            class="card-img-top"
                            alt="Expotec 2009"
                        />
                    </div>
                </div>
                 <div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec10.jpg"
                            class="card-img-top"
                            alt="Expotec 2010"
                        />
                    </div>
                </div>
                 <div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec11.jpg"
                            class="card-img-top"
                            alt="Expotec 2011"
                        />
                    </div>
                </div>
            </div><br>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec12.jpg"
                            class="card-img-top"
                            alt="Expotec 2012"
                        />
                    </div>
                </div><div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec13.jpg"
                            class="card-img-top"
                            alt="Expotec 2013"
                        />
                    </div>
                </div><div class="col-md-4">
                    <div class="card">
                        <img
                            src="@/assets/images/expotec14.jpg"
                            class="card-img-top"
                            alt="Expotec 2014"
                        />
                    </div>
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
// importando estilo principal
@import '../style.scss';

.card{

    .btn-success{
        background-color:$verde-color;
    }

    .btn-success:hover{
        background-color:$verde-color;
        opacity: 0.6;
    }

    .card-title{
        color:$verde-color;
    }
    img{
        height: 150px;
    }
}
</style>