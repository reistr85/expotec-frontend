<template>
    <section>
          <div class="container">
          <div class="row text-center">
                <h2 class=" col-md-12">Contato</h2>
                <Divisor/>
          </div>
        <div class="row blocos">
            <div class="box">
                <div class="container">
                <h2 class="text-center text-white">
                    Quer receber mais informações sobre a Expotec? 
Cadastre seu e-mail e fique ligado nas notícias.
                </h2>

                <form action="#" class="form-control">
                    <div class="row">
                        <div class="col-md-10">
                            <input type="email" name="email" id="input-email" placeholder="E-mail" class="form-control">
                        </div>
                        <div class="col-md-2">
                        
                        <input type="submit" value="Confirmar email" class="form-control btn btn-primary ">
                        </div>

                   </div>
                   
                </form>
                </div>
            </div>
        </div>
        <div class="row blocos">
            <div class="col-md-6">
                <h6><i class="fas fa-map-marker-alt"></i> Endereço</h6>
                <p>Avenida Senador Salgado Filho, 1559, Tirol. Natal -
                     RN I CEP 59015-000. IFRN | Natal - Central</p>
            </div>
        </div>
        <div class="row blocos">
            <div class="col-md-3">
                <h6><i class="fas fa-phone"></i> Telefone</h6>
                <p>(84)  4005 9882 / 9855</p>
            </div>
            <div class="col-md-3">
                <h6><i class="fas fa-envelope"></i> Email</h6>
                <p>direx.cnat@ifrn.edu.br </p>
            </div>
        </div>
        </div>

    </section>
</template>
<script>
import Divisor from '../../components/Divisor/Divisor';

export default {
    
    components:{
        Divisor
    }
    
}
</script>
<style lang="scss" src="./style.scss" scoped>
