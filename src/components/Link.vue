<script setup lang="ts">
import { RouterLink } from 'vue-router'
export interface Props {
    to: string
}
const { to } = defineProps<Props>()
</script>

<template>
    <RouterLink :to="to" class="vue-link">
        <slot></slot>
    </RouterLink>
</template>

<style>
.vue-link {
    text-decoration: none;
    transition: 0.4s;
    color: var(--color-text-dark);
}

.vue-link:hover {
    filter: brightness(1.5);
}
</style>
