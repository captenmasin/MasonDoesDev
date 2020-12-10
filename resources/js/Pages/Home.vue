<template>
    <div class="flex flex-col md:flex-row md:items-center pb-20">
        <div class="w-full mt-10 md:mt-0 md:w-4/12 relative">
            <div class="absolute top-0 left-0 xl:left-0 md:whitespace-nowrap z-10">
                <h1 class="text-yellow-300 text-3xl md:text-5xl	-mt-8 word-wrap-break flex flex-col xl:flex-row">
                    <span>A random guy&nbsp;</span><span>who makes things</span>
                </h1>
                <p class="text-lg md:text-xl text-white">
                    Professional developer in the most non-professional sense<br>with a real love for code and all
                    things web-y
                </p>
            </div>
        </div>
        <div class="w-full md:w-8/12 relative">
            <div class="aspect-ratio-square"></div>
            <div
                class="absolute top-5 left-5 md:top-10 md:left-10 w-full h-full object-cover bg-blue-900 opacity-50"></div>
            <img v-lazy="'../../img/lou-and-mas.jpg'" class="absolute top-0 right-0 w-full h-full object-cover"/>
            <div class="absolute top-0 right-0 w-full h-full object-cover bg-red-600 blend-darken"></div>
        </div>
    </div>
</template>
<script>
export default {
    metaInfo: {title: 'Home'},
}
</script>
