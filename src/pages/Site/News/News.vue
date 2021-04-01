<template>
  <div>
      <header-app/>
      
        <div class="content">
            <title-path class="title_page" page="Notícias" color="#00C689"/>
            <span class="update">23/11/2021 12h às 20h - Atualizado há 2 minutos</span>
            <div class="colums_content">
                <section class="main_content">
                    <img class="main_content_img" src="@/assets/images/hyper-festival.jpg" alt="hyper-festival">
                    <div class="main_content_text">
                        <h3 class="main_content_text__title">Hyper Festival retorna a SP trazendo o que há de mais atual em realidade aumentada e virtual</h3>
                        <p class="main_content_text__paragraph">No dia 23 de novembro, a Digital House, em São Paulo, recebe mais uma edição do Hyper Festival. O evento é pioneiro no Brasil ao falar exclusivamente sobre conteúdos imersivos, como realidade virtual e realidade aumentada.

Marcado para ocorrer das 12h às 20h, o festival trará uma gama de experiências. Os participantes poderão se sentir parte de filmes e animações, além de conferir palestras e painéis dedicados ao mercado e produção de conteúdos imersivos.</p>
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