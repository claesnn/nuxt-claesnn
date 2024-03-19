<script setup lang="ts">
const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    })
}
</script>

<template>
    <main>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="article in list" :key="article._path" class="my-5">
                <NuxtLink :to="article._path">
                    <p class="text-sm uppercase">{{ formatDate(article.date) }}</p>
                    <h2 class="font-[Kurale] text-3xl">{{ article.title }}</h2>
                    <p>{{ article.description }}</p>
                </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>