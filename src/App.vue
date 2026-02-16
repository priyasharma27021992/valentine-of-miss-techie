<script setup lang="ts">
import { ref } from 'vue';
const habits = ref([{ id: 1, name: 'Study', done: false }]);

const markHabitDone = (id: number) => {
	habits.value = habits.value.map((ele) => {
		if (ele.id === id) return { ...ele, done: true };
		return ele;
	});
};
</script>

<template>
	<main>
		<h1>Habits</h1>
		<ul>
			<li
				v-for="habit in habits"
				:key="habit.id">
				<div v-if="habit.done">Done</div>
				<div v-else>Not Done</div>
				<div>{{ habit.name }}</div>
				<button
					:disabled="habit.done"
					@click="markHabitDone(habit.id)">
					Mark as Done
				</button>
			</li>
		</ul>
	</main>
</template>

<style scoped></style>
