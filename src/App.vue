<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Priya');
const href = ref('https://scrimba.com/');
const disabled = ref(true);
const coding_years = ref(0);
const username = ref('priyasharma');

const getFormattedDate = (date: Date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-UK', options);
};
</script>

<template>
	<main>
		<h1>
			Hi, my name is
			<a
				:href="href + '@' + username"
				target="_blank">
				{{ name }}
			</a>
		</h1>
		<a
			target="_blank"
			:href>
			<button :disabled>
				Click to visit my favourite website! If you can...
			</button>
		</a>
		<h2>
			{{
				coding_years > 0
					? `I have been coding for ${coding_years} years`
					: "I'm a newbie"
			}}
		</h2>
		<h3>Today is {{ getFormattedDate(new Date()) }}</h3>
	</main>
</template>

<style scoped>
h1 {
	text-align: center;
	font-weight: bold;
}
</style>
