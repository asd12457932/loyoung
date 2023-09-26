<template>
    <div class="relative pb-[56.25%] h-0">
        <ClientOnly>
            <img
                v-show="isImageLoaded"
                class="absolute inset-0 w-full h-full object-cover object-center"
                v-bind:src="src"
                v-bind:alt="alt"
                v-on:load="isImageLoaded = true"
            >
            <Skeleton v-show="!isImageLoaded" class="absolute inset-0 w-full h-full" />
            <template #fallback>
                <img
                    key="ssr"
                    class="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                    v-bind:src="src"
                    v-bind:alt="alt"
                >
            </template>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: '',
        },
    });

    const isImageLoaded = ref(false);
</script>
