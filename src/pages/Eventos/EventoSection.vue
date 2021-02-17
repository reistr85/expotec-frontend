<template>
      <section id="eventos">
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
                    src="../../assets/Imagem1.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Button</a>
                </div>
                </div>
          </div>
          <div class="col-md-8">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                </div>
                 <div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                </div>
                 <div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                </div>
            </div><br>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                </div><div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                </div><div class="col-md-4">
                    <div class="card">
                        <img
                            src="../../assets/Imagem1.jpg"
                            class="card-img-top"
                            alt="..."
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
import Divisor from '../../components/Divisor';

export default {
    
    components:{
        Divisor
    }
    
}
</script>
<style lang="scss" src="./style.scss" scoped>