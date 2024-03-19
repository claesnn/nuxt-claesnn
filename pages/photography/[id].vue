<script setup>
const route = useRoute()
const image = `/images/${route.params.id}`
</script>


<template>
    <img class="max-h-[calc(100vh-100px)] mx-auto py-3"
        :srcset="`${image}-200.webp 200w, ${image}-420.webp 420w, ${image}-640.webp 640w, ${image}-960.webp 960w, ${image}-1280.webp 1280w`">
</template>