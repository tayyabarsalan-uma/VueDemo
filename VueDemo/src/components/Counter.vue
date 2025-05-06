<template>
    <div class="counter" :style="{color: $store.getters.getColorCode}">
        {{$store.state.counter}}
    </div>
</template>

<style>
    .counter {
        font-size: 80px;
    }
</style>