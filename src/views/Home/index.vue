<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import IconButton from '@/components/IconButton.vue'
import Link from '@/components/Link.vue'
import IconLink from '@/components/IconLink.vue'
import Loading from '@/components/Loading.vue'

function onClick() {
    console.log('hi')
}
</script>

<template>
    <h1>Home Component</h1>
    <Icon fontawesome="fa-solid fa-heart" />
    <IconButton fontawesome="fa-solid fa-xmark"></IconButton>
    <IconLink to="/auth/signin" fontawesome="fa-solid fa-user"
        >Sign-In</IconLink
    >
    <Link to="/auth/reset" style="margin: 0.25rem">Reset</Link>
    <Loading complete />
</template>

<style></style>
