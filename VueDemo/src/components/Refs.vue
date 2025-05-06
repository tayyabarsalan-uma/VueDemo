<template>
    <div>
        <input ref="inputText"/>
    </div>
</template>

<script>
export default {
  mounted() {
        //this.$refs.input.text('Placeholder from Refs')
        this.$refs.inputText.focus();
        this.$refs.inputText.placeholder = 'Placeholder from Refs';
            console.log('Refs has been mounted');
  }
}
</script>