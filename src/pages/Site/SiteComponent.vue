<template>
<div>
    <HeaderSite/>
    <MainSection/>
    <CardsSection/>
    <EventoSection/>
    <Certificados/>
    <Noticias/>
    <Parceiros/>
    

</div>      
</template>
<script>
import HeaderSite from '../Header/HeaderSite';
import MainSection from '../Main/MainSection';
import CardsSection from '../Cards/CardsSection';
import EventoSection from '../Eventos/EventoSection';
import Certificados from '../Certificados/Certificados';
import Noticias from '../Noticias/Noticias';
import Parceiros from '../Parceiros/Parceiros';


export default {
     components: {
         HeaderSite,
         MainSection,
         CardsSection,
         EventoSection,
         Certificados,
         Noticias,
         Parceiros
     }
}
</script>