<template>
    <div>
        <h1 class="text-3xl md:text-5xl text-yellow-300 mt-10 mb-8">
            Here's a list of things I've made
        </h1>
        <div class="flex flex-wrap -mx-2 pb-10 space-y-4 md:space-y-0">
            <div v-for="project in projects" class="flex w-full md:w-4/12 xl:w-3/12 mb-4 px-2">
                <div class="flex flex-col w-full text-white">
                    <div class="w-full aspect-ratio-16/9 relative mb-2 border-4 border-yellow-300">
                        <a :href="project.web_link" class="absolute top-0 right-0 w-full h-full" v-if="project.image"
                           target="_blank">
                            <img :alt="'Screenshot of ' + project.name" :src="'/storage/' + project.image"
                                 class="absolute top-0 right-0 w-full h-full"/>
                        </a>
                        <div
                            v-else
                            class="bg-black bg-opacity-50 absolute top-0 right-0 w-full h-full flex align-center justify-center">
                            <div
                                class="flex text-3xl md:text-xl lg:text-3xl text-yellow-300 transform -rotate-45 text-center items-center">
                                Coming<br>soon!
                            </div>
                        </div>
                    </div>
                    <h2 class="text-xl">
                        {{ project.name }}
                    </h2>
                    <ul class="text-sm space-y-1 mb-2 mt-1">
                        <li v-if="project.web_link">
                            <a :href="project.web_link" class="hover:bg-red-100 hover:text-yellow-800 py-2">
                                {{ project.web_link }}
                            </a>
                        </li>
                        <li v-if="project.github_link">
                            <a :href="project.github_link" class="hover:bg-red-100 hover:text-yellow-800 py-2">
                                Github Repo
                            </a>
                        </li>
                    </ul>
                    <p class="font-sans text-xs" v-if="project.description">
                        {{ project.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    metaInfo: {title: 'Projects'},
    props: {
        projects: Array,
    },
    data() {
        return {

        }
    },
    mounted() {
    }
}
</script>
