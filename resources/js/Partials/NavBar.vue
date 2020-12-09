<template>
    <div class="flex md:pt-20 pt-4 justify-end mb-4">
        <div class="w-full flex justify-between">
            <div>
                <nav v-if="!$page.props.is_home">
                    <ul class="flex">
                        <li>
                            <inertia-link href="/"
                                          class="text-lg text-red-200 hover:bg-red-200 hover:text-yellow-800 py-2 hover:bg-red-200 hover:text-yellow-800 py-2">
                                Home
                            </inertia-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul class="flex flex-col sm:flex-row sm:space-x-4">
                        <li>
                            <inertia-link href="/projects"
                                          class="text-lg text-red-200 hover:bg-red-200 hover:text-yellow-800 py-2">
                                Projects
                            </inertia-link>
                        </li>
                        <li>
                            <a href="https://twitter.com/capten_masin"
                               target="_blank"
                               class="text-lg text-red-200 hover:bg-red-200 hover:text-yellow-800 py-2">Twitter</a>
                        </li>
                        <li>
                            <a href="http://github.com/captenmasin"
                               target="_blank"
                               class="text-lg text-red-200 hover:bg-red-200 hover:text-yellow-800 py-2">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
