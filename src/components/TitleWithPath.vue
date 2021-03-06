<template>
  <div class="body">
        <h1 class="title">{{ page }}</h1>
        <img class="icon_home" src="@/assets/images/icon-home.svg" alt="Icone de Casinha">
        <h3 class="path"><router-link to="/">Início</router-link></h3>
        <h3 class="path_color" :style="'color:'+color+';'"> / {{ page }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        page: {
            type: String
        },
        color: {
            type: String
        }
    }
}
</script>

<style scoped>
    .body{
        display: block;
        padding: 2em 5em 3em 0;
    }
    .title{
        color: #000000;
    }
    .path{
        margin-left: 15px;
    }
    .path > *{
        color: #000000;
    }
    .path > *:hover{
        color: rgba(0, 0, 0, 0.8);
        text-decoration: underline;
    }
    .path, .path_color{
        display: inline
    }
    .path, .path_color, .icon_home{
        vertical-align: middle;
    }

</style>