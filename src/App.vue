<script setup lang="ts">
import { ref } from 'vue';
import Habit from './components/Habit.vue';
const habits = ref([]);
const text = ref("");

const toggleDone = (id: number) => {
	habits.value = habits.value.map((ele) => {
		console.log('hello toggleDone', ele);
		if (ele.id === id) return { ...ele, done: !ele.done };
		return ele;
	});
};

const addHabit = () => {
	habits.value.push({id: habits.value.length+1, name: text.value, done: false});
	text.value = "";
}
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
			<div style="display: flex; flex-direction: row; gap: 8px;">
				<input v-model="text" placeholder="Add Habit" style="padding: 8px; border-radius: 8px;"/>
				<button @click="addHabit">Add Habit</button>
			</div>
			<Habit
				v-for="habit in habits"
				:key="habit.id"
				:habit="habit"
				@toggleDone="toggleDone(habit.id)" />
		</ol>
	</main>
</template>

<style scoped></style>
