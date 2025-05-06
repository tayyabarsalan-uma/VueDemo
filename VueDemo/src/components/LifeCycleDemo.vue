<template>
    <div>Counter: {{ counter }}</div>
</template>

<script>
export default {
  props: ['counter'],
  beforeCreate() {
    console.log('child-component: beforeCreate');
  },
  created() {
    console.log('child-component: created');
  },
  beforeMount() {
    console.log('child-component: beforeMount');
  },
  mounted() {
    console.log('child-component: mounted');
  },
  beforeUpdate() {
    console.log('child-component: beforeUpdate');
  },
  updated() {
    console.log('child-component: updated');
  },
  activated() {
    console.log('child-component: activated');
  },
  deactivated() {
    console.log('child-component: deactivated');
  },
  beforeUnmount() {
    console.log('child-component: beforeUnmount');
  },
  unmounted() {
    console.log('child-component: unmounted');
  }
};
</script>
