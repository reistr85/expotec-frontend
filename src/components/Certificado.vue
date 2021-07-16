<template>
    <div class="general">
        <!-- <div class="button_impress">
            <button class="button btn btn-primary" @click="imprimirCertificado()">Imprimir Certificado</button>
        </div> -->
        <div id="pdf" class="pdf_certificate">
            <div class="left_section">
                <img class="image_side" src="@/assets/images/side-certificado.png" alt="Logo do IFRN">
            </div>
            <div class="right_section">
                <h2 class="header_pdf">MINISTÉRIO DA EDUCAÇÃO INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO GRANDE DO NORTE</h2>
                <p class="sub_header_pdf">Criado pela Lei 11.892, de 29.12.2008, em decorrência da transformação Institucional do Centro Federal de Educação Tecnológica do Rio Grande do Norte</p>
                <h1 class="title">C E R T I F I C A D O</h1>
                <p class="text_pdf">Certificamos que {{ name }}, CPF: {{ cpf }}, participou da Oficina {{ workshop }}, ministrada durante a Exposição Científica, Tecnológica e Cultural do Campus Natal Central do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte – EXPOTEC 2021, no período de {{ period }}, com carga horária de {{ workload }} horas.</p>
                <p class="date_pdf">Natal/ RN, {{ day }} de {{ month }} de 2021.</p>
                <h3 class="name_director">Melquiades Pereira de Lima Júnior</h3>
                <p class="director">Diretor de Extensão</p>
                <p class="link">www.ifrn.edu.br</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        name: {
            type: String
        },
        cpf: {
            type: String
        },
        workshop: {
            type: String
        },
        period: {
            type: String
        },
        day: {
            type: String
        },
        month: {
            type: String
        },
        workload: {
            type: String
        }
    }

}
</script>

<style scoped>
    .general{
        display: none;
        background-color: #444444;
    }
    .button_impress{
        padding: 4em 0;
        text-align: center;
    }
    .button{
        padding: 1.7em;
    }
    .pdf_certificate{
        background-color: #fdfdfd;
        display: flex;
        height: 3508px;
        width: 2480px;
    }
    .image_side, .right_section{
        height: 100%;
    }
    .right_section{
        text-align: center;
        padding: 3em;
    }
    .header_pdf{
        font-size: 2em;
        font-weight: bolder;
    }
    .sub_header_pdf{
        font-size: 2em;
        font-weight: 500;
    }
    .title{
        font-size: 7em;
        padding: 2em 0;
    }
    .text_pdf{
        font-size: 4em;
        text-align: justify;
    }
    .date_pdf{
        font-size: 3em;
        padding-top: 8em;
        padding-bottom: 12em;
    }
    .name_director{
        font-size: 3.5em;
        font-weight: bolder;
    }
    .director{
        font-size: 2.9em;
        font-weight: 450;
    }
    .link{
        position: absolute;
        top: 3300px;
        right: 600px;
        font-size: 6em;
        padding-left: .6em;
        border-left: 14px solid green;
    }

</style>