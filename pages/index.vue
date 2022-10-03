<script setup>
const { data } = useFetch("/api/test");
</script>

<template>
  <div class="bg-green-200 w-screen h-screen">{{ data }}</div>
</template>
