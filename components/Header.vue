<template>
    <header>
        <nav class="fixed bg-black px-10 py-8 w-[100vw] z-10">
            <div class="flex justify-between items-center container mx-auto">
                <div>
                    <span class="text-2xl text-white">Loyang</span>
                </div>
                <ul class="hidden md:flex gap-5 text-white">
                    <li
                        v-for="item in navLink"
                        v-bind:key="item.name"
                        class="cursor-pointer border-b-2 border-transparent hover:border-white transition-all"
                        v-bind:class="{
                            'border-white': route.path === item.path
                        }"
                    >
                        <NuxtLink v-bind:to="item.path">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
                <Icon
                    name="Bars3"
                    class="md:hidden block text-white w-6 h-6"
                    v-on:click="toggleSidebar"
                />
            </div>
        </nav>
        <Transition>
            <div v-if="isShowSidebar" class="fixed bg-white w-[100vw] h-[100vh] z-10 px-10 py-8">
                <div class="flex justify-between items-center">
                    <span class="text-2xl text-black">Loyang</span>
                    <Icon
                        name="XMark"
                        class="md:hidden block text-black w-6 h-6"
                        v-on:click="toggleSidebar"
                    />
                </div>
                <ul class="py-2 px-3">
                    <NuxtLink
                        v-for="item in navLink"
                        v-bind:key="item.name"
                        v-bind:to="item.path"
                    >
                        <li
                            class="cursor-pointer border-b-2 border-transparent hover:border-white transition-all my-3 text-xl"
                            v-on:click.capture="toggleSidebar"
                        >
                            {{ item.name }}
                        </li>
                    </NuxtLink>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script lang="ts" setup>

    const route = useRoute();
    const navLink = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Projects',
            path: '/projects',
        },
        {
            name: 'Photograph',
            path: '/photograph',
        },
        {
            name: 'About',
            path: '/about',
        },
    ];

    const isShowSidebar = ref(false);
    const toggleSidebar = () => {
        isShowSidebar.value = !isShowSidebar.value;
    };
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
