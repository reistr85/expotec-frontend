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
import MainSection from '../../components/MainSection';
import CardsSection from '../../components/CardsSection';
import EventoSection from '../../components/EventoSection';

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