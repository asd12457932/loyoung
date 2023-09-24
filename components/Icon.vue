<template>
    <Component
        v-bind:is="icon"
    />
</template>

<script setup lang="ts">
    import * as outline from '@heroicons/vue/24/outline';
    import * as solid from '@heroicons/vue/24/solid';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        outline: {
            type: Boolean,
            default: false,
        },
    });
    const icon = computed(() => {
        const localIcon = ((props.outline ? outline : solid) as any)[`${props.name}Icon`];
        return localIcon ?? solid.QuestionMarkCircleIcon;
    });
</script>
