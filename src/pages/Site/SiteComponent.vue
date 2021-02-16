<template>
<div>
    <HeaderSite/>
    <MainSection/>
    <CardsSection/>
    <EventoSection/>
</div>      
</template>
<script>
import HeaderSite from '../Header/HeaderSite';
import MainSection from '../Main/MainSection';
import CardsSection from '../Cards/CardsSection';
import EventoSection from '../Eventos/EventoSection';


export default {
     components: {
         HeaderSite,
         MainSection,
         CardsSection,
         EventoSection
     }
}
</script>

<style scoped>

</style>