<template>
	<div>
		<HeaderSite />
		<MainSection />
		<CardsSection />
		<EventoSection />
		<Certificados />
		<Noticias />
		<Parceiros />
		<Contato />
		<FooterSite />
	</div>      
</template>

<script>
import HeaderSite from './components/Header/HeaderSite';
import MainSection from './components/Main/MainSection';
import CardsSection from './components/Cards/CardsSection';
import EventoSection from './components/Eventos/EventoSection';
import Certificados from './components/Certificados/Certificados';
import Noticias from './components/Noticias/Noticias';
import Parceiros from './components/Parceiros/Parceiros';
import Contato from './components/Contato/Contato';
import FooterSite from './components/Footer/FooterSite';


export default {
	name: 'Home',
	components: {
		HeaderSite,
		MainSection,
		CardsSection,
		EventoSection,
		Certificados,
		Noticias,
		Parceiros,
		Contato,
		FooterSite,
	}
}
</script>