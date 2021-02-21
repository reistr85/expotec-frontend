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
import HeaderSite from './components/HeaderSite';
import MainSection from './components/MainSection';
import CardsSection from './components/CardsSection';
import EventoSection from './components/EventoSection';
import Certificados from './components/Certificados';
import Noticias from './components/Noticias';
import Parceiros from './components/Parceiros';
import Contato from './components/Contato';
import FooterSite from './components/FooterSite';


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