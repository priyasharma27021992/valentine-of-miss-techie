<script setup lang="ts">
import { ref } from 'vue';
import ProductDisplay from './components/ProductDisplay.vue';
const cart = ref([]);
const premium = ref(false);

const updateCart = (index: number) => {
	cart.value.push(index);
};
</script>

<template>
	<main>
		<div class="cart">Cart: {{ cart.length }}</div>
		<ProductDisplay
			:premium="premium"
			@add-to-cart="updateCart" />
	</main>
</template>

<style scoped></style>
