<template>
    <div class="buttons">
        <button @click="$store.dispatch('decrementCounter')">-</button>
        <button @click="$store.dispatch('incrementCounter')">+</button>
    </div>
</template>

<style>
    div {
        margin-bottom: 10px;
    }

    .buttons button {
        font-size: 20px;
        width: 100px;
        margin: 0 10px;
    }
</style>