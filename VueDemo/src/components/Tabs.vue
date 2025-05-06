<template>
    <div>
        <button @click="currentComponent = Refs">Show Reactive Component</button>
        <button @click="currentComponent = HelloWorld">Show Plain Component</button>
        <br />
        <br />
        <br />

        <keep-alive>
            <component :is="currentComponent" />
        </keep-alive>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import HelloWorld from './HelloWorld.vue'
    import Refs from './Refs.vue'

    const currentComponent = ref(Refs)
</script>