<template>
    <div>
        <!-- wrong way only mutations can update the state-->
        <!--<input type="text" name="colorCode" v-model="$store.state.colorCode" />-->
        <input type="text" name="colorCode" v-model="colorCode" />
    </div>
</template>

<style>
    div {
        margin-bottom: 10px;
    }
</style>

<script>
    export default {
        computed: {
            colorCode: {
                get(){
                    return this.$store.getters.getColorCode
                },
                set(newColorCode){
                    console.log('newColorCode: ' + newColorCode);
                    this.$store.dispatch('SetColorCode', newColorCode);
                }
            }
        }
    }
</script>