<script setup lang="ts">
import { ref } from 'vue';
import Habit from './components/Habit.vue';
const habits = ref([{ id: 1, name: 'Study', done: false }]);

const markHabitDone = (id: number) => {
	habits.value = habits.value.map((ele) => {
		if (ele.id === id) return { ...ele, done: true };
		return ele;
	});
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
		<h1>Habits</h1>
		<ol>
			<Habit
				v-for="habit in habits"
				:key="habit.id"
				:habit="habit"
				@markHabitDone="markHabitDone(habit.id)" />
		</ol>
	</main>
</template>

<style scoped></style>
