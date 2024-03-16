<script setup lang="ts">
const menuOpen = ref(false)

onMounted(() =>
    watchEffect(() => {
        document.body.style.overflow = menuOpen.value ? "hidden" : "visible"
    })
)
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header class="header border-b">
            <div class="flex justify-between px-3 max-w-7xl mx-auto py-3 place-items-center">
                <NuxtLink to="/">
                    <div class="flex place-items-center" @click="menuOpen = false">
                        <h1 class="font-[Oswald] text-xl sm:text-2xl logo font-bold">
                            CLAESNN
                        </h1>
                    </div>
                </NuxtLink>

                <nav class="flex place-items-center">
                    <button @click="menuOpen = !menuOpen" class="md:hidden"><svg v-if="!menuOpen"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg><svg v-if="menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg></button>

                    <div class="hidden md:block">
                        <NuxtLink to="/blog">
                            <Button variant="link" class="px-2 sm:px-4 text-foreground">
                                Blog</Button>
                        </NuxtLink>
                        <NuxtLink to="/photography">
                            <Button variant="link" class="px-2 sm:px-4 text-foreground">
                                Photography</Button>
                        </NuxtLink>
                        <NuxtLink to="/software">
                            <Button variant="link" class="px-2 sm:px-4 text-foreground">
                                Software</Button>
                        </NuxtLink>
                        <NuxtLink to="/biotech">
                            <Button variant="link" class="px-2 sm:px-4 text-foreground">
                                Biotech</Button>
                        </NuxtLink>
                    </div>



                </nav>
            </div>
        </header>
        <nav v-if="menuOpen" class="w-full z-10 fixed top-[58px] flex">
            <div @click="menuOpen = false" class=" bg-gray-900 h-screen flex-grow opacity-40"></div>
            <aside class="w-[20rem] bg-white h-screen p-3 flex flex-col">
                <NuxtLink to="/blog">
                    <Button variant="link" class="text-foreground text-lg" @click="menuOpen = false">
                        Blog</Button>
                </NuxtLink>
                <NuxtLink to="/photography">
                    <Button variant="link" class="text-foreground text-lg" @click="menuOpen = false">
                        Photography</Button>
                </NuxtLink>
                <NuxtLink to="/software">
                    <Button variant="link" class="text-foreground text-lg" @click="menuOpen = false">
                        Software</Button>
                </NuxtLink>
                <NuxtLink to="/biotech">
                    <Button variant="link" class="text-foreground text-lg" @click="menuOpen = false">
                        Biotech</Button>
                </NuxtLink>
            </aside>
        </nav>


        <main class="px-3 py-2 max-w-7xl mb-auto mx-auto w-full">
            <NuxtPage />
        </main>
    </div>
    <footer class="footer border-t border-slate-200 mt-5">
        <div class="flex justify-between max-w-7xl mx-auto px-3 py-2 place-items-center">
            <a href="https://github.com/claesnn/website" class="flex text-sm place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
                <h2>Check out source code</h2>
            </a>
            <div>
                <a href="https://github.com/claesnn">
                    <Button variant="ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-github">
                            <path
                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg> </Button></a>
                <a href="https://instagram.com/claesnn">
                    <Button variant="ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-instagram">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </Button>
                </a>
                <a href="https://linkedin.com/in/claesnn/">
                    <Button variant="ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </Button>
                </a>
            </div>
        </div>
    </footer>
</template>

<style>
.router-link-active button {
    text-decoration: underline;
}

.logo {
    letter-spacing: 0.1rem;
}
</style>
