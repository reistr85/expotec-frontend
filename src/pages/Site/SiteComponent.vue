<template>
<div>
    <HeaderSite/>
    <MainSection/>
    <CardsSection/>
    <EventoSection/>
    <Certificados/>
</div>      
</template>
<script>
import HeaderSite from '../Header/HeaderSite';
import MainSection from '../Main/MainSection';
import CardsSection from '../Cards/CardsSection';
import EventoSection from '../Eventos/EventoSection';
import Certificados from '../Certificados/Certificados';


export default {
     components: {
         HeaderSite,
         MainSection,
         CardsSection,
         EventoSection,
         Certificados
     }
}
</script>