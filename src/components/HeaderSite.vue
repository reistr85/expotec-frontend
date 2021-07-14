<template>
  <!-- Start your project here-->
  <header class="text-center" id="header">
    <nav class="container navbar navbar-expand-lg">
      <div class="container row">
        <div class="col-md-8">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto text-center">
              <li class="nav-item active">
                <router-link class="navbar-brand" to="/">
                  <img src="../assets/images/logo-expotec.svg" alt class="logo_expotec img-fluid" />
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/noticias" >Notícias</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eventos">Eventos</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sobre-section">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certificados-section">Certificados</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#parceiros-section">Parceiros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contato-section">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <router-link class="navbar-text white-text" to="/login">
            <button type="button" class="btn btn-light">Entrar</button>
          </router-link>

          <router-link class="navbar-text white-text" to="/cadastrar">
            <button type="button" class="btn btn-primary">Cadastro</button>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/pages/Site/Home/style.scss";

.logo_expotec {
  width: 6.5em;
}

header {
  padding: 20px 0px;

  nav {
    box-shadow: none;

    .nav-link {
      color: grey;
      font-weight: bold;

      .active {
        color: black;
      }

      .nav-link:hover {
        color: black;
      }

      #eventos,
      #news-letter {
        background-color: #2a6395;
      }
      .card-title {
        color: #3b3b3b;
        font-weight: bold;
      }
    }
  }
  .col-md-4 {
    margin-top: 8px;
  }
}
</style>
