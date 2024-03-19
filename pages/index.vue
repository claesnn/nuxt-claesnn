<script setup lang="ts">
import { FormField } from "@/components/ui/form"
import { useForm } from "vee-validate"
import { object, string } from "yup"

useHead({
    title: "Claes Nymand Nilsson - Photography, Biotech and Programmming",
    meta: [
        {
            name: "description",
            content:
                "I am Danish biotech scientist with a thousand side-hobbies. I have a passion for photography, coding, biotech and sports, amongst other things. I share my thoughts on those hobbies and the world at large through my blog. Come follow along, when I dig into photo composition, python package management, javascript framework-wars and coffee tricks with diminishing returns.",
        },
    ],
})

type Publication = {
    year: string
    title: string
    authors: string
    doi: string
}

type Photo = {
    id: number
    width: number
    height: number
    alt: string
}

const photos: Photo[] = [
    {
        id: 24,
        width: 1280,
        height: 853,
        alt: "A photo of a rock in the ocean in Iceland"
    },
    {
        id: 45,
        width: 1280,
        height: 853,
        alt: "A photo of a road with flowers on each side leading to a mountain in Iceland"
    },
    {
        id: 2,
        width: 1280,
        height: 1920,
        alt: "A photo of the adventure tower in south zealand"
    },
    {
        id: 7,
        width: 1280,
        height: 1920,
        alt: "A photo of the Geysir in Iceland"
    },
    {
        id: 38,
        width: 1280,
        height: 853,
        alt: "A photo of waterfalls in Iceland"
    },
    {
        id: 41,
        width: 1280,
        height: 853,
        alt: "A photo of the oldest church in Iceland with hayballs on the field"
    }
]


const publications: Publication[] = [
    {
        year: "2015",
        title:
            "Versatile microscale screening platform for improving recombinant protein productivity in Chinese hamster ovary cells",
        authors:
            "Henning Gram Hansen, <strong>Claes Nymand Nilsson</strong>, Anne Mathilde Lund, Stefan Kol, Lise Marie Grav, Magnus Lundqvist, Johan Rockberg, Gyun Min Lee, Mikael Rørdam Andersen, Helene Faustrup Kildegaard",
        doi: "10.1038/srep18016",
    },
]

const schema = object({
    animal: string().required().min(3).max(60),
})

const form = useForm({
    initialValues: {
        animal: "",
    },
    validationSchema: schema,
})

const message = ref("")

const onSubmit = form.handleSubmit((values) => {
    const animal = values.animal.toLowerCase()

    if (animal.includes("cat") || animal.includes("kitten")) {
        message.value = "🎉🎉🎉 You guessed it! Meow! 🎉🎉🎉"
    } else if (animal.includes("dog")) {
        message.value = "Close, but no cigar!"
    } else if (animal.includes("dolphin")) {
        message.value = "Great guess, but no, equally playful though!"
    } else if (animal.includes("shark")) {
        message.value = "No, but they're both predators"
    } else if (
        animal.includes("hamster") ||
        animal.includes("guinea pig") ||
        animal.includes("rabbit")
    ) {
        message.value = "No, but they're both small and cute"
    } else {
        message.value = "Try again!"
    }

})

const navigate = (url: string) => {
    window.location.href = url
}
</script>

<template>

    <h1 class="font-[Kurale] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 text-center">
        Hi, I'm Claes Nymand Nilsson
    </h1>
    <div class="max-w-3xl mx-auto mt-8">
        <div class="flex">
            <img src="/profile-pic-200.webp" width="80" height="80" class="h-20 w-20 rounded-[4rem] mr-5"
                alt="Profile picture of Claes Nymand Nilsson" />
            <p>
                I am Danish biotech scientist with a thousand side-hobbies. I have a passion for
                <RouterLink to="/photography"><u>photography</u></RouterLink>,
                <RouterLink to="/software"><u>coding</u></RouterLink>,
                biotech and sports, amongst other things. I share my thoughts on those hobbies and the world at large
                through my
                <RouterLink to="/blog"><u>blog</u></RouterLink>. Come follow along, when I dig into photo composition,
                python package management, javascript framework-wars
                and coffee tricks with diminishing returns.
            </p>
        </div>
        <div class="flex min-w-full justify-center mt-6">
            <RouterLink to="/blog">
                <Button class="align-center px-8 py-4">Straight to the blog!</Button>
            </RouterLink>
        </div>
    </div>

    <hr class="my-12">

    <RouterLink to="/photography">
        <h1 class="font-[Kurale] text-5xl mb-10">Photography</h1>
    </RouterLink>
    <div class="grid sm:grid-cols-2 gap-3">
        <div v-for="(image, index) in photos" :key="image.id">
            <RouterLink :to="`/photography/${image.id}`">
                <img :srcset="`/images/${image.id}-200.webp 200w, /images/${image.id}-420.webp 420w, /images/${image.id}-420.webp 640w, /images/${image.id}-640.webp 960w,/images/${image.id}-640.webp 1280w`"
                    :loading="index < 2 ? 'eager' : 'lazy'" :alt="image.alt" :width="image.width"
                    :height="image.height" />
            </RouterLink>
        </div>
    </div>

    <div class="flex justify-center mt-3">
        <RouterLink to="/photography">
            <Button variant="ghost" to="/photography"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-more-horizontal">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                </svg></Button>
        </RouterLink>
    </div>

    <hr class="my-12">

    <h1 class="font-[Kurale] text-5xl mb-10">Software</h1>

    <div class="bg-gray-50 py-10">
        <Card class="max-w-sm mx-auto">
            <CardHeader>
                <h1 class="text-xl font-bold">Animal quiz</h1>
            </CardHeader>
            <CardContent>

                <form @submit="onSubmit" :class="`flex flex-col ${message ? 'hidden' : ''}`">
                    <FormField v-slot="{ componentField }" name="animal">
                        <FormItem>
                            <FormLabel>Animal</FormLabel>
                            <FormControl>
                                <Input v-bind="componentField" class="w-full" />
                            </FormControl>
                            <FormDescription>Please enter the cutest animal</FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button type="submit" class="mt-4">Submit</Button>
                </form>
                <div :class="`space-y-4 ${!message ? 'hidden' : ''}`">
                    <p>{{ message }}</p>
                    <Button @click="() => message = ''">Try again</Button>
                </div>
            </CardContent>
        </Card>
    </div>

    <hr class="my-12 mx-auto">

    <h1 class="font-[Kurale] text-5xl mb-10">Biotech</h1>

    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Authors</TableHead>
                <TableHead>DOI</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="publication in publications" class="hover:cursor-pointer"
                @click="() => navigate(`https://doi.org/${publication.doi}`)">
                <TableCell>{{ publication.year }}</TableCell>
                <TableCell>{{ publication.title }}</TableCell>
                <TableCell v-html="publication.authors"></TableCell>
                <TableCell>{{ publication.doi }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>

</template>

<style>
.photo-container {
    max-height: calc(100vh - 100px);
}
</style>