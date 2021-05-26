<template>
  <!-- Start your project here-->
  <footer class="text-center container">
    <div class="row">
      <div class="col-md-5">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#"></a>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto text-center">
              <li class="nav-item active">
                <a class="nav-link" href="#sobre-section">
                  Sobre
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eventos">Eventos</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certificados-section">Certificados</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="col-md-2">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/images/logo-expotec.svg" alt class="img-fluid" />
        </router-link>
      </div>
      <div class="col-md-4">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#"></a>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto text-center">
              <li class="nav-item">
                <a class="nav-link" href="#parceiros-section">
                  Parceiros
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contato-section">Contato</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/noticias">Notícias</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="col-md-1 col-sm-1">
        <span id="seta-roxa">
          <i class="fas fa-angle-up"></i>
        </span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../style.scss";

footer {
  background-color: white;
  margin-top: 80px;

  .navbar {
    padding: 20px 100px;
    box-shadow: none;
  }
  .nav-link {
    color: grey;
    font-weight: bold;
  }
  .active {
    color: black;
  }
  .nav-link:hover {
    color: black;
  }

  #seta-roxa {
    background-color: $roxo-color;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    padding: 15px 15px 5px 15px;

    i {
      font-size: 30px;
    }
  }
}
</style>

