<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useValidateToken } from '@/store'

onMounted(() => {
    useValidateToken().then(({ error, auth }) => {
        if (error) {
            console.log('failed to validate token!')
            return
        }
        console.log('success to validate token!', auth)
    })
})
</script>

<template>
    <h1>Auth Component</h1>
    <RouterView></RouterView>
</template>
