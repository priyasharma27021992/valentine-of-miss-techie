<script setup lang="ts">
interface HeroProps {
	component: string;
	title: string;
	subtitle: string;
	imgUrl: string;
}
const props = defineProps<{
	data: HeroProps;
}>();
console.log(props.data);
</script>

<template>
	<section>
		<div>
			<img
				:src="data.imgUrl"
				style="width: 300px; height: 300px" />
		</div>
	</section>
</template>
