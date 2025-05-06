<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template class="wrapper">
    <div class="wrapper">
        <div class="default">
            <h1 class="green">
                This is the default route.
                Checkout Hello by adding "/hello"
                and About by adding "/about" in URL
            </h1>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        margin-left: -200px;
    }

    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }
    .default h1 {
        margin-left: 150px;
    }

    img.logo {
        margin-left: 200px;
    }

@media (min-width: 1024px) {
    .default h1 {
        text-align: left;
    }
}
</style>
