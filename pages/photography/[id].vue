<script setup>
const route = useRoute()
const image = `/images/${route.params.id}-1280.webp`
</script>


<template><img :src="image"></template>