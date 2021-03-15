<template>
  <div>
      <header-app/>
      
        <div class="content">
            <title-path class="title_page" page="Notícias" color="#00C689"/>
            <span class="update">24/02/2021 21h37 - Atualizado há 2 minutos</span>
            <div class="colums_content">
                <section class="main_content">
                    <img class="main_content_img" src="@/assets/images/bot.jpg" alt="Bot">
                    <div class="main_content_text">
                        <h3 class="main_content_text__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p class="main_content_text__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. <br><br> Asperiores, iste! Repellat, adipisci!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum similique cupiditate saepe minus sapiente nesciunt, rem repudiandae possimus expedita dolorum laboriosam dolor necessitatibus provident laborum. Asperiores, iste! Repellat, adipisci!</p>
                    </div>
                </section>


                <section class="related_content">
                    <section class="email">
                        <form class="related_content_email">
                            <label class="related_content_email__label" for="email_news">Inscreva seu e-mail para receber notícias</label>
                            <div class="input-group mb-3">
                                <input class="related_content_email__input form-control" type="email" id="email_news" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="related_content_email__button btn btn-primary" type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="more_news">
                        <h4 class="more_news__title">Mais Notícias</h4>

                        <li class="more_news_title__cards">
                            <div class="card">
                                <img class="card_img" src="@/assets/images/direx.svg" alt="titulo alternativo">
                                <div class="card_text">
                                    <span class="card_text__span">Lorem Lorem</span>
                                    <h5 class="card_text__title">Sed accumsan tellus ac nibh tempor.</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card_img">
                                    <img class="card_img__img" src="@/assets/images/bot.jpg" alt="titulo alternativo">
                                </div>
                                <div class="card_text">
                                    <span class="card_text__span">Lorem Lorem</span>
                                    <h5 class="card_text__title">Sed accumsan tellus ac nibh tempor.</h5>
                                </div>
                            </div>
                        </li>
                    </section>
                </section>
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