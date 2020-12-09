<template>
    <div class="min-h-screen font-heading overflow-x-hidden">
        <div class="container mx-auto px-12 xl:px-4 max-w-screen-xl">
            <nav-bar />
            <slot></slot>
        </div>
    </div>
</template>

<script>

import NavBar from "../Partials/NavBar";

export default {
    components: {NavBar},
    data() {
        return {}
    },
    methods: {},
    mounted() {

    },
    computed: {},
}
</script>
