<template>
    <div class="flex flex-col gap-10">
        <Carousel
            id="gallery"
            v-model="currentSlide"
            v-bind:autoplay="5000"
            class="w-[100vw] sm:w-[70vw] md:w-[50vw] mx-auto"
        >
            <Slide v-for="photo in photographs" v-bind:key="photo">
                <img
                    v-show="isImageLoaded"
                    v-bind:src="getImageUrl(photo)"
                    v-bind:alt="photo"
                    v-on:load="isImageLoaded = true"
                >
                <Skeleton v-show="!isImageLoaded" class="absolute inset-0 w-full h-full" />
                <template #fallback>
                    <img
                        key="ssr"
                        class="absolute inset-0 w-full h-full object-cover object-center"
                        v-bind:src="getImageUrl(photo)"
                        v-bind:alt="photo"
                    >
                </template>
            </Slide>
        </Carousel>
        <Carousel
            id="thumbnails"
            ref="carousel"
            v-model="currentSlide"
            class="w-[80vw] md:w-[30vw] mx-auto"
            v-bind:itemsToShow="3"
            v-bind:wrapAround="true"
        >
            <Slide v-for="(photo, index) in photographs" v-bind:key="photo">
                <div class="carousel__item" v-on:click="slideTo(index)">
                    <img
                        v-show="isImageLoaded"
                        v-bind:src="getImageUrl(photo)"
                        v-bind:alt="photo"
                        v-on:load="isImageLoaded = true"
                    >
                    <Skeleton v-show="!isImageLoaded" class="absolute inset-0 w-full h-full" />
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
    import { Carousel, Slide } from 'vue3-carousel';

    const { data: photographs } = await useFetch<string[]>('/api/photograph');
    const getImageUrl = (url: string) => new URL(`/assets/images/photograph/${url}`, import.meta.url).href;
    const isImageLoaded = ref(false);
    const currentSlide = ref(0);
    const slideTo = (index: number) => {
        console.log(index);
        currentSlide.value = index;
    };

</script>

<style lang="scss">
@import "vue3-carousel/dist/carousel.css";
</style>
