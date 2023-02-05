<script setup lang="ts">
import Icon from '@/components/Icon.vue'

export interface Props {
    fontawesome: string
}

const props = defineProps<Props>()

// FIXME: How to prompt user must to pass @click ?
</script>

<template>
    <button>
        <Icon :fontawesome="props.fontawesome" />
    </button>
</template>

<style scoped>
button {
    background-color: ivory;
    color: var(--color-text-dark);
    font-size: 1rem;
    border: 0;
    transition: 0.4s;
    cursor: pointer;
}

button:hover {
    transform: translateX(-1%) translateY(-1%);
    filter: brightness(1.5);
}

button:focus-visible {
    outline: none;
}
</style>
