<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import Link from '@/components/Link.vue'

export interface Props {
    to: string
    fontawesome: string
}

const { to, fontawesome } = defineProps<Props>()
</script>

<template>
    <Link :to="to">
        <Icon :fontawesome="fontawesome" class="icon-link" />
        <slot></slot>
    </Link>
</template>

<style>
/* 50% -> 1:1 */
.icon-link:before {
    margin-right: 20%;
}
</style>
