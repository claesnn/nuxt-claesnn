<script setup lang="ts">
function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}
</script>

<template>
    <ContentDoc v-slot="{ doc }">
        <article>
            <h1 class="font-[Kurale] xl:text-7xl lg:text-6xl text-4xl mb-2">
                {{ doc.title }}
            </h1>
            <span class="uppercase text-sm text-slate-500">
                {{ formatDate(doc.date) }}
            </span>
            <h2 class="font-[Kurale] xl:text-3xl lg:text-2xl text-xl mb-6 text-slate-700">
                {{ doc.description }}
            </h2>
            <ContentRenderer id="md" class="space-y-2" :value="doc" />
        </article>
    </ContentDoc>
</template>

<style>
#md h2 a {
    font-family: 'Kurale';
    font-size: x-large;
}
</style>