<template>
    <div class="flex flex-col md:flex-row gap-8 items-center">
        <img class="md:max-w-[50vw]" v-bind:src="getImageUrl()" alt="loyang" />
        <div class="text-white text-left flex flex-col gap-5">
            <div class="flex flex-col gap-1">
                <h1 class="text-4xl">Loyang</h1>
                <p class="text-xl">Theater Visual & Audio Maker</p>
            </div>
            <div class="flex flex-col gap-1">
                <p class="text-lg">Contact</p>
                <p>Phone: 0812-3456-7890</p>
                <p>Email: aaaa@gmail.com</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const getImageUrl = () => new URL(`/assets/images/profile-photo.jpg`, import.meta.url).href;
</script>