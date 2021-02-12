<template>
  <h1> Login Vue 1 {{ test }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'login',

  setup() {
    const test = ref<string>('string1')

    return { test }
  }

})
</script>
<style>
  h1 {
    color: red;
  }
</style>
