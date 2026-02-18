<script setup lang="ts">
import { ref } from 'vue';

defineProps(['habit']);
const emit = defineEmits(['toggleDone']);

const count = ref(0);

const handleClick = () => {
	emit('toggleDone');
	count.value++;
}
</script>

<template>
	<li
		style="display: flex; flex-direction: row; gap: 10px; align-items: center">
		<div>{{ habit.name }}</div>
		<div
			v-if="habit.done"
			style="color: green">
			Done
		</div>
		<div
			v-else
			style="color: red">
			Not Done
		</div>
		<button
			@click="handleClick"
			:class="{ 'btn-disabled': habit.done }"
		>
			<span v-if="habit.done">Mark as Un Done</span>
			<span v-else>Mark as Done</span>
		</button>
		<p>Button clicked: {{ count }} times</p>
	</li>
</template>
