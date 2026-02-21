<script setup lang="ts">
import { ref } from 'vue';
import { getRandomImage } from '../api/images';
interface HeroProps {
	component: string;
	title: string;
	subtitle: string;
	imgUrl: string;
}
const props = defineProps<{
	data: HeroProps;
}>();

const image = ref({
	url: '',
	alt: '',
});

const getARandomImage = async () => {
	const [error, data] = await getRandomImage();
	image.value = {
		url: data.urls.full,
		alt: data.alt_description,
	};
};
getARandomImage();
</script>

<template>
	<section>
		<div>
			<img
				:src="image.url"
				:alt="image.alt" />
		</div>
	</section>
</template>

<style>
img {
	height: 500px;
}
</style>
