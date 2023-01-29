<script setup lang="ts">
import {
    onActivated,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onDeactivated,
    onErrorCaptured,
    onMounted,
    onRenderTracked,
    onRenderTriggered,
    onScopeDispose,
    onServerPrefetch,
    onUnmounted,
    onUpdated,
    watch,
    ref,
} from 'vue'
import { store, useHealth, useSignIn } from '@/store'

const submit = ref<boolean>(false)

onBeforeMount(() => {
    console.log('before mount')
})

onMounted(() => {
    console.log('mounted: ')
})

onBeforeUpdate(() => {
    console.log('before update')
})

onUpdated(() => {
    console.log('updated')
})

function handleSignIn() {
    useSignIn({ email: 'example@mail.unknown', password: 'Aa123456@' }).then(
        (result) => {
            result instanceof Error
                ? console.log('sign-in failed :>>', result)
                : console.log('sign-in success :>>', result)
        }
    )
}

watch(submit, () => {
    console.log('submit trigger :>>', submit.value)
    handleSignIn()
})
</script>

<template>
    <h1>Home Component</h1>
    <ul>
        <li>token: {{ store.auth.token }}</li>
        <li>user name: {{ store.auth.user.name }}</li>
        <li>user birthday: {{ store.auth.user.birthday }}</li>
        <li>user gender: {{ store.auth.user.gender }}</li>
        <li>user phone: {{ store.auth.user.phone }}</li>
        <li>user email: {{ store.auth.user.email }}</li>
        <li>user avatar: {{ store.auth.user.avatar }}</li>
    </ul>
    <button @click="useHealth">auth health</button>
    <button @click="submit = !submit">auth sign-in</button>
</template>
