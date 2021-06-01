<template>
  <section id="parceiros-section">
    <div class="container">
      <div class="row text-center">
        <h2 class="col-md-12">Parceiros</h2>
        <Divisor />
      </div>
      <br />
      <br />
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a
                class="navbar-text white-text"
                href="https://www.crea-rn.org.br/site_crearn/"
                target="_blank"
              >
                <img src="@/assets/images/ParceiroCrea.png" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a
                class="navbar-text white-text"
                href="http://www.escoladegoverno.rn.gov.br/"
                target="_blank"
              >
                <img src="@/assets/images/ParceiroEscolaDoGoverno.jpg" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a
                class="navbar-text white-text"
                href="https://www.gov.br/incra/pt-br"
                target="_blank"
              >
                <img src="@/assets/images/ParceiroIncra.png" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a class="navbar-text white-text" href="http://www.sethas.rn.gov.br/" target="_blank">
                <img src="@/assets/images/ParceiroSethas.jpg" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a class="navbar-text white-text" href="http://www.tjrn.jus.br/" target="_blank">
                <img src="@/assets/images/ParceiroTribunalDeJustica.png" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a class="navbar-text white-text" href="https://www.trt21.jus.br/" target="_blank">
                <img src="@/assets/images/ParceiroTrt.jpg" alt class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Divisor from "@/components/Divisor/Divisor";
export default {
  components: {
    Divisor
  }
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
img {
  width: 312px;
  height: 175px;
}
</style>

