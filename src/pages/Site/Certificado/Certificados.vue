<template>
  <div class="main">
    <header-minificado />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <title-path class="title_page" page="Certificados" color="#2A327D" icon="icon-home-roxo.png" style="font-weigth:bold" />
          <div class="container">
            <p class="boas-vindas">Olá, Dassaev!</p>
            <p
              class="mt-5 pt-1 emitir-certificado-text"
            >Para emitir seu certificado, basta clicar no ícone à direita de cada item da lista de participações.</p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="@/assets/images/certificado.svg"
            alt="imagem padrão de certificado"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="container mt-5">
      <table class="table table-striped">
        <tbody>
          <tr class="row table-active">
            <td class="col-md-11 evento-text">2018 - Mostra de Profissões 2018</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row">
            <td class="col-md-11 evento-text pt-3">2019 - Expotec 2019 - Mini curso de Python</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row table-active">
            <td class="col-md-11 evento-text">WTADS 2019</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row">
            <td class="col-md-11 evento-text">2020 - Mini curso de VueJS + PHP</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row table-active">
            <td class="col-md-11 evento-text">2020 - Hackaton Funcern</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row">
            <td class="col-md-11 evento-text">2020 - WINFO 2020</td>
            <td class="col-md-1">
              <img
                src="@/assets/images/certificado.svg"
                alt="icone de baixar certificado"
                class="img-fluid"
              />
            </td>
          </tr>
          <tr class="row table-active">
            <td class="col-md-11 evento-text ">2021 - Expotec 2021 - Mini curso de Angular</td>
            <td class="col-md-1">
              <button class="button-certified" @click="imprimirCertificado()">
                <img
                  src="@/assets/images/certificado.svg"
                  alt="icone de baixar certificado"
                  class="img-fluid"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <Certificado id="imprimirCertificado" :name="data.name" :cpf="data.cpf" :workshop="data.workshop" :period="data.period" :day="data.day" :month="data.month" :workload="data.workload"/>
  </div>
</template>

<script>
import HeaderMinificado from "@/components/HeaderMinificado.vue";
import TitleWithPath from "@/components/TitleWithPath.vue";
import Certificado from "@/components/Certificado.vue";

import { Printd } from 'printd';

export default {
  components: {
    "header-minificado": HeaderMinificado,
    "title-path": TitleWithPath,
    Certificado
  },
  methods: {
        imprimirCertificado(){
            
            const cssText = `
            .general{
                display: block;
            }
            .pdf_certificate{
                display: flex;
                heigth: 1000px;
            }
            .right_section{
                text-align: center;
                padding: 1em;
            }
            .image_side, .right_section{
                height: 1000px;
            }
            .header_pdf{
                font-size: 1em;
                text-align: center;
                font-weight: bold;
            }
            .sub_header_pdf{
                font-size: .7em;
                font-weight: 500;
            }
            .title{
                padding-top: 1.3em;
                padding-bottom: 1.8em;
                font-size: 2.4em;
            }
            .text_pdf{
                font-size: 1.1em;
                text-align: justify;
            }
            .date_pdf{
                font-size: 1em;
                padding-top: 4em;
                padding-bottom: 6em;
            }
            .name_director{
                font-size: 1.3em;
                font-weight: bolder;
            }
            .director{
                font-size: 1.1em;
                font-weight: 450;
            }
            .link{
                position: absolute;
                top: 950px;
                right: 60px;
                font-size: 1em;
                padding-left: .6em;
                border-left: 3px solid green;
            }

            `

            const d = new Printd()
            d.print( document.getElementById('imprimirCertificado'), [cssText] )
        }   
  },
  data() {
    return {
      data :
        {
          name: "Guilherme Hendres",
          cpf: "70114353441",
          workshop: "Angular",
          period: "25/06 a 27/06",
          day: "27",
          month: "junho",
          worload: "14h"
        }      
    }
  }
  
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>