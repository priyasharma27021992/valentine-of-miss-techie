<script setup lang="ts">
defineProps(['habit']);
defineEmits(['markHabitDone']);
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
			:disabled="habit.done"
			@click="$emit('markHabitDone')">
			Mark as Done
		</button>
	</li>
</template>
