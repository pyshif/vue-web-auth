<script setup lang="ts">
export interface Props {
    fontawesome: string
}

const props = defineProps<Props>()
</script>

<template>
    <i :class="props.fontawesome"></i>
</template>
