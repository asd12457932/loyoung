<template>
    <div class="flex flex-wrap gap-6 px-10">
        <NuxtLink 
            v-bind:to="`/projects/${project.title}`" 
            v-for="project in projects" 
            v-bind:key="project.title"
            class="mb-[10px] md:mb-0 basis-1/1-gap-6 sm:basis-1/2-gap-6 lg:basis-1/3-gap-6"
        >
            <Image v-bind:src="getImageUrl(project.imageUrl)" v-bind:alt="project.title" />
            <span class="text-white my-3 flex justify-center">{{ project.title }}</span>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
import { IProject } from '~/interfaces/IProject';

const { data: projects } = await useFetch<IProject[]>('/api/projects');
const getImageUrl = (url: string) => new URL(`/assets/images/projects/${url}`, import.meta.url).href;
</script>