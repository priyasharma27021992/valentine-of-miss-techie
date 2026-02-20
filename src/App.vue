<script setup lang="ts">
import Hero from './components/Hero.vue';
import TextBlock from './components/TextBlock.vue';
import CTA from './components/CTA.vue';
import CMSData from './mocks/cmsData.json';
const componentMap = {
	hero: Hero,
	textBlock: TextBlock,
	cta: CTA,
};
</script>

<template>
	<main
		style="
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		">
		<h1>Component Renderer</h1>
		<section v-for="item in CMSData">
			<component
				:is="componentMap[item.component]"
				:data="item" />
		</section>
	</main>
</template>

<style scoped></style>
