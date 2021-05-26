<template>
  <div>
      <header-minificado/>
        <div class="container">
            <title-path class="title_page" page="Eventos" color="#FBA31B"/>

            <div class="row">
                <div class="col-md-8">
                    <div class="card mb-5">
                        <img
                            src="@/assets/images/workshopPesquisaInovacao.png"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                             <h4 class="date-event">Data: <span>05/03</span></h4>
                            <h6>Hora: 08:30h</h6>
                            <h3 class="pt-4">DIPEQ promove "Workshop de Pesquisa e Inovação</h3>
                            <p >No próximo dia 05 de março, a partir das 8h30, a Diretoria de Pesquisa (Dipeq) do Campus Natal-Central do IFRN, vai promover o “Workshop de Pesquisa e Inovação”. A iniciativa visa divulgar os resultados parciais dos projetos de pesquisa, promover o compartilhamento de experiências na gestão dos projetos de pesquisa e integrar os grupos de pesquisa do campus.

Na programação, grupos diversos apresentam suas pesquisas tais como: "Estimação da Radiação Solar por meio da Energia Elétrica produzida por módulos fotovoltaicos" , "SMART PROTECTION 2.0: Sistema Avançado de Proteção contra Ataques de Negação de Serviços", "Accesscontrol IOT: Controle de acesso físico utilizando internet das coisas", "Utilização do ambiente virtual de aprendizagem (AVA) Moodle como ferramenta de apoio ao ensino presencial", dentre outras.

 Um total de 25 projetos de 11 grupos de pesquisa serão apresentados, dentro de 4 áreas de pesquisa. Confira a programação completa que acontecerá nos turnos matutino e vespertino.</p>  
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="card text-center text-white card-inscricao">
                        <div class="card-body">
                            <h3>DIPEQ promove "Workshop de Pesquisa e Inovação</h3>
                            <button class="btn roxo">FAZER INSCRIÇÂO</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import HeaderMinificado from '@/components/HeaderMinificado.vue';
import TitleWithPath from '@/components/TitleWithPath.vue';
export default {
    components: {
        'header-minificado': HeaderMinificado,
        'title-path': TitleWithPath
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>