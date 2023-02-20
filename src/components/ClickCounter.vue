<script setup lang="ts">
	import { useCounterStore } from "@/stores/counter";
	import { storeToRefs } from "pinia";

	defineProps<{
		date: Date;
	}>();

	const store = useCounterStore();

	const { count } = storeToRefs(store);

	function increment(): void {
		store.increase();
	}
</script>

<template>
	<div>
		<p>Current date: {{ date.toLocaleDateString() }}</p>
		<div>Current count: {{ count }}</div>
		<button @click="increment">Increase</button>
	</div>
</template>
