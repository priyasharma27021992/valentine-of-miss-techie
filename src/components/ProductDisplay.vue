<script setup lang="ts">
import { ref, computed } from 'vue';
import socksGreenImage from '../assets/images/socks_green.jpeg';
import socksBlueImage from '../assets/images/socks_blue.jpeg';

const props = defineProps({
	premium: Boolean,
	required: true,
});

const emit = defineEmits(['add-to-cart']);

const shipping = computed(() => {
	if (props.premium) return 'Free';
	else return '2.99';
});
const title = computed(() => {
	return brand.value + ' ' + product.value;
});

const product = ref('Socks');
const brand = ref('Vue Mastery');
const selectedVariant = ref(0);
const variants = ref([
	{ id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
	{ id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
]);
const image = computed(() => {
	return variants.value[selectedVariant.value].image;
});

const inStock = computed(() => {
	return variants.value[selectedVariant.value].quantity > 0;
});

const updateVariant = (index) => (selectedVariant.value = index);

const addToCart = () => {
	emit('add-to-cart', variants.value[selectedVariant.value].id);
};
</script>

<template>
	<section class="product-display">
		<p>Shipping : {{ shipping }}</p>
		<div class="product-container">
			<div class="product-image">
				<img :src="image" />
			</div>
			<div class="product-info">
				<h1>{{ title }}</h1>
				<p v-if="inStock">In Stock</p>
				<p v-else>Out of Stock</p>
				<ul>
					<li
						v-for="(variant, index) in variants"
						:key="variant.id"
						@mouseover="updateVariant(index)"
						class="color-circle"
						:style="{
							backgroundColor: variant.color,
							listStyle: 'none',
						}"></li>
				</ul>
				<button
					:disabled="!inStock"
					v-on:click="addToCart">
					Add To Cart
				</button>
			</div>
		</div>
	</section>
</template>
