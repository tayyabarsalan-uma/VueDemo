<template>
    <counter></counter>
    <counter-squared></counter-squared>
    <counter-buttons></counter-buttons>
    <color-code></color-code>

</template>

<script>
    import CounterComponent from './Counter.vue';
    import CounterButtonsComponent from './CounterButtons.vue';
    import CounterSquaredComponent from './CounterSquared.vue';
    import ColorCodeComponent from './ColorCode.vue';

    export default {
        components: {
            'counter': CounterComponent,
            'counter-squared': CounterSquaredComponent,
            'counter-buttons': CounterButtonsComponent,
            'color-code': ColorCodeComponent
        }
    }
</script>
