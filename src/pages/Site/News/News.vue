<template>
  <div>
    <header-minificado />

    <div class="content">
      <title-path class="title_page" page="Notícias" color="#00C689" />
      <span class="update" v-if="noticia">23/11/2021 12h às 20h - Atualizado há 2 minutos</span>
      <div class="colums_content">
        <section class="main_content">
          <img
            class="main_content_img"
            :src="'https://expotec.api.mgetech.com.br/images/news/'+ noticia.image"
            alt="hyper-festival"
          />
          <div class="main_content_text" v-if="noticia">
            <h3
              class="main_content_text__title" 
            >{{noticia.title}}</h3>
            <!--<h3 class="main_content_text__title">Hyper Festival retorna a SP trazendo o que há de mais atual em realidade aumentada e virtual</h3>-->
            <p class="main_content_text__paragraph">
              {{noticia.description}}
            </p>
          </div>
        </section>

        <section class="related_content">
          <section class="email">
            <form class="related_content_email">
              <label
                class="related_content_email__label"
                for="email_news"
              >Inscreva seu e-mail para receber notícias</label>
              <div class="input-group mb-3">
                <input
                  class="related_content_email__input form-control"
                  type="email"
                  id="email_news"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="related_content_email__button btn btn-primary" type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </section>
          <section class="more_news">
            <h4 class="more_news__title">Mais Notícias</h4>

            <li class="more_news_title__cards" v-if="widget_noticias">
              <div class="card" v-for="widget in widget_noticias.slice(0,3)" :key="widget.id">
                <img class="card_img img-fluid rounded"  :src="'https://expotec.api.mgetech.com.br/images/news/'+ widget.image" alt="titulo alternativo" />
                <div class="card_text">
                  <span class="card_text__span">{{widget.title}}</span>
                  <!--h5 class="card_text__title">Sed accumsan tellus ac nibh tempor.</h5>-->
                </div>
              </div>
              <!--<div class="card">
                <div class="card_img">
                  <img class="card_img__img" src="@/assets/images/bot.jpg" alt="titulo alternativo" />
                </div>
                <div class="card_text">
                  <span class="card_text__span">Lorem Lorem</span>
                  <h5 class="card_text__title">Sed accumsan tellus ac nibh tempor.</h5>
                </div>
              </div>-->
            </li>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMinificado from "@/components/HeaderMinificado.vue";
import TitleWithPath from "@/components/TitleWithPath.vue";

/*if (process.browser) {
  var noticia_id = location.search.slice(1).split("=")[-1]; 
}*/

export default {
  data() {
    return {
      noticia: null,
      widget_noticias:[]
    };
  },
  components: {
    "header-minificado": HeaderMinificado,
    "title-path": TitleWithPath
  },
  mounted() {
    this.$http
      .get("https://expotec.api.mgetech.com.br/api/expotec/v1/news")
      .then(res => {
        res.body.forEach(element => {
          if (element.id == 3) {
            this.noticia = element;
          }else{
            this.widget_noticias.push(element);
          }
        });
      });
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>