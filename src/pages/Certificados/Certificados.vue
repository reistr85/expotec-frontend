<template>
    <section>
          <div class="container">
          <div class="row text-center">
                <h2 class=" col-md-12">Certificados</h2>
                <Divisor/>
          </div><br><br>
            <div class="row">
                <div class="col-md-6" id="coluna-texto-certificado">
                    <p>
                        Emita seus certificados de participação em eventos realizados na Expotec como participante, palestrante, apresentador ou organizador do evento com um simples clique!
                    </p><br>
                    <button type="button" class="btn btn-primary">Acesse aqui</button>
                </div>
                <div class="col-md-6">
                    <img src="../../assets/certificado.svg" alt="" srcset="" class="col-md-12 img-fluid">
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
