<script setup lang="ts">
const PHOTO_COUNT = 54
</script>

<template>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(_, photo) in Array(PHOTO_COUNT)" :key="photo">
            <NuxtLink :to="`/photography/${photo}`">
                <img
                    :srcset="`images/${photo}-200.wenp 200w, images/${photo}-420.webp 420w, images/${photo}-640.webp 640w`" />
            </NuxtLink>
        </div>
    </div>
</template>