<template>
  <div>
      <header-app/>
        <div class="container">
            <title-path class="title_page" page="Eventos" color="#FBA31B"/>

            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <img
                            src="@/assets/images/bot.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                             <h4 class="date-event">Data: <span>20/08</span></h4>
                            <h6>Hora: 18:00-21:00</h6>
                            <h3 class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. <br><br> Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!</p>  
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="card text-center text-white card-inscricao">
                        <div class="card-body">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                            <button class="btn roxo">FAZER INSCRIÇÂO</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import HeaderSite from '@/components/HeaderSite.vue';
import TitleWithPath from '@/components/TitleWithPath.vue';
export default {
    components: {
        'header-app': HeaderSite,
        'title-path': TitleWithPath
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>