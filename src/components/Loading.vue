<script setup lang="ts">
import { cloneVNode, watch } from 'vue'

export interface Props {
    complete?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    complete: false,
})

watch(props, () => {
    console.log('props :>> ', props)
})
</script>

<template>
    <div :class="{ loading: true, complete: props.complete }">
        <div class="circle">
            <div class="shallow"></div>
        </div>
        <div class="text">Loading</div>
        <div class="dot"></div>
    </div>
</template>

<style>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-background-light);
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading.complete {
    display: none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loading .circle {
    width: 30px;
    height: 30px;
    border: 3px solid var(--color-text-dark);
    border-radius: 50%;
    position: relative;
    animation: spin 2s linear infinite;
    margin-right: 0.25rem;
}

.circle .shallow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 26px;
    height: 27px;
    background: var(--color-background-light);
    border-radius: 50%;
}

.loading .text {
    /* font-weight: bolder; */
    font-weight: bold;
    color: var(--color-text-dark);
}

@keyframes beat {
    0% {
        box-shadow: 0px 0px 0px -1px var(--color-text-dark);
    }
    50% {
        box-shadow: 0px 0px 0px 1px var(--color-text-dark);
    }
    100% {
        box-shadow: 0px 0px 0px -1px var(--color-text-dark);
    }
}

.loading .dot {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: var(--color-text-dark);
    position: relative;
    margin-left: 10px;
    margin-top: 8px;
    animation: beat 2s linear 0.2s infinite;
}

.loading .dot:before,
.loading .dot:after {
    width: 2px;
    height: 2px;
    content: '';
    background: var(--color-text-dark);
    border-radius: 50%;
    position: absolute;
    display: inline-block;
}

.loading .dot:before {
    right: 6px;
    animation: beat 2s linear 0s infinite;
}

.loading .dot:after {
    left: 6px;
    animation: beat 2s linear 0.4s infinite;
}
</style>
