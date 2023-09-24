<template>
    <div v-for="(photo, index) in photographs" v-bind:key="photo">
        <Image
            v-bind:src="getImageUrl(photo)" 
            v-bind:alt="photo" 
            v-bind:class="{
                'mb-[10px]': index % 3 !== 0,
                'mb-0': index % 3 === 0,
                'basis-1/1-gap-6': index % 3 === 0,
                'sm:basis-1/2-gap-6': index % 3 !== 0,
                'lg:basis-1/3-gap-6': index % 3 !== 0
            }"/>
    </div>
</template>
<script lang="ts" setup>
    const { data: photographs, error } = await useFetch<string[]>('/api/photograph');
    const getImageUrl = (url: string) => new URL(`/assets/images/photograph/${url}`, import.meta.url).href;
</script>