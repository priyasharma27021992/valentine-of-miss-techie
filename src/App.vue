<script setup lang="ts">
import { ref } from 'vue';
import socksGreenImage from './assets/images/socks_green.jpeg';
import socksBlueImage from './assets/images/socks_blue.jpeg';

const product = ref('Socks');
const description = ref('Description');
const image = ref(socksGreenImage);
const inventory = ref(0);
const variants = ref([
	{ id: 2234, color: 'green', image: socksGreenImage },
	{ id: 2235, color: 'blue', image: socksBlueImage },
]);

const cart = ref(0);
const addToCart = () => (cart.value += 1);

const updateImage = (variantImage: string) => (image.value = variantImage);
</script>

<template>
	<main>
		<div class="cart">Cart: {{ cart }}</div>
		<div class="product-display">
			<div class="product-container">
				<div class="product-image">
					<img :src="image" />
				</div>
				<div class="product-info">
					<h1>{{ product }}</h1>
					<p v-if="inventory > 10">In Stock</p>
					<p v-else-if="inventory > 0 && inventory <= 10">Almost sold out</p>
					<p v-else>Out of Stock</p>
					<ul>
						<li
							v-for="variant in variants"
							:key="variant.id"
							@mouseover="updateImage(variant.image)">
							{{ variant.color }}
						</li>
					</ul>
					<button @click="addToCart">Add To Cart</button>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
