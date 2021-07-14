<template>
    <div>
        <div class="container geral">
            <header-minificado/>
            <title-path class="title_page" page="Eventos" color="#FBA31B"/>

            <div class="row">
                <div class="col-md-8">
                    <div class="card mb-5" v-if="event">
                        <img
                            :src="'https://expotec.api.mgetech.com.br/images/events/'+ event.image"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                             <h4 class="date-event">Data: <span>{{event.created_at}}</span></h4>
                            <h6>Hora: 08:30h</h6>
                            <h3 class="pt-4">{{event.name}}</h3>
                            <p>{{event.description}}</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center text-white card-inscricao">
                        <div class="card-body">
                            <h3 v-if="event">{{event.name}}</h3>
                            <button v-on:click="subscribeModal()" class="btn roxo">FAZER INSCRIÇÂO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <register-event class="modal"></register-event>
        <confirm-email class="confirm_email"></confirm-email>
    </div>
</template>

<script>
import HeaderMinificado from '@/components/HeaderMinificado.vue';
import TitleWithPath from '@/components/TitleWithPath.vue';
import RegisterInEvent from './registerInEvent.vue'
import ConfirmEmail from './confirmEmail.vue'

export default {
    data(){
        return{
            event:null
        }
    },
    components: {
        'header-minificado': HeaderMinificado,
        'title-path': TitleWithPath,
        'register-event': RegisterInEvent,
        'confirm-email': ConfirmEmail
    },
    methods: {
        subscribeModal(){
            const modal = document.querySelector(".modal")
            const modalEmail = document.querySelector('.confirm_email')
            const div = document.querySelector('.geral')


            div.style.opacity = '0.2';
            modal.style.display = 'block';

            document.querySelector('.cancel_register').addEventListener('click', () => {
                modal.style.display = 'none';
                div.style.opacity = '1';
            })

            document.querySelectorAll('.signup').forEach(button => {
                button.addEventListener('click', () => {
                    modal.style.display = 'none';
                    modalEmail.style.display = 'block';
                
                })
            });

            document.querySelector('.cancel_email').addEventListener('click', () => {
                modalEmail.style.display = 'none';
                modal.style.display = 'block';
            })
            
        }
    },
    mounted() {
    this.$http
      .get("https://expotec.api.mgetech.com.br/api/expotec/v1/events")
      .then(res => {
        res.body.forEach(element => {
          if (element.id == 9) {
            this.event = element;
            console.log(element);
          }
        });
      });
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>