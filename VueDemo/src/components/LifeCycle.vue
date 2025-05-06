<!--<template>
    <div>Check the console for lifecycle logs</div>
</template>

<script setup lang="ts">
    beforeCreate() {
        console.log('Vue 3 - beforeCreate');
    },
    created() {
        console.log('Vue 3 - created');
    },
    beforeMount() {
        console.log('Vue 3 - beforeMount');
    },
    mounted() {
        console.log('Vue 3 - mounted');
    },
    beforeUpdate() {
        console.log('Vue 3 - beforeUpdate');
    },
    updated() {
        console.log('Vue 3 - updated');
    },
    beforeUnmount() {
        console.log('Vue 3 - beforeUnmount');
    },
    unmounted() {
        console.log('Vue 3 - unmounted');
    }
</script>-->

<template>
    <div id="app">
        <button @click="toggleComponent">Toggle Component</button>
        <button @click="increment">Increment Counter</button>
        <hr />
        <keep-alive>
            <LifeCycleDemoComponent v-if="showChild" :counter="counter" />
        </keep-alive>
    </div>
</template>

<script>
    import LifeCycleDemoComponent from './LifeCycleDemo.vue';

    export default {
        components: {
            LifeCycleDemoComponent
        },
        data() {
            return {
                showChild: true,
                counter: 0
            };
        },
        methods: {
            toggleComponent() {
                this.showChild = !this.showChild;
            },
            increment() {
                this.counter++;
            }
        }
    };
</script>
