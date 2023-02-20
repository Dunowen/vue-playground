<script setup lang="ts">
	import ClickCounter from "../components/ClickCounter.vue";
</script>

<template>
	<ClickCounter :date="new Date()" />
</template>

<style scoped>
	:root {
		color: red;
	}
</style>
