<template>
    <div
        class="flex flex-col justify-center items-center gap-8 text-white min-h-[100vh] bg-[url('/assets/images/bg.jpg')] bg-cover bg-center mask"
    >
        <div class="flex flex-col gap-1 items-center">
            <h1 class="text-[64px] font-bold">
                Loyang
            </h1>
            <span class="text-lg">Visual, Audio</span>
        </div>
        <NuxtLink to="/projects" class="p-3 border border-white hover:bg-white hover:text-black transition-all">
            Enter
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'cover',
    });
</script>
