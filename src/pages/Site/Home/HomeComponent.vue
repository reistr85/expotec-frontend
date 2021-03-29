<template>
	<div>
		<HeaderSite />
		<MainSection />
		<Noticias />
		<EventoSection />
		<SobreSection/>
		<Certificados />
		<Parceiros />
		<Contato />
		<FooterSite />
	</div>      
</template>

<script>
import HeaderSite from '@/components/HeaderSite';
import MainSection from './components/MainSection';
import SobreSection from './components/SobreSection';
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
		SobreSection,
		EventoSection,
		Certificados,
		Noticias,
		Parceiros,
		Contato,
		FooterSite,
	}
}
</script>