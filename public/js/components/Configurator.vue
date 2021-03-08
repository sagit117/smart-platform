<template>
  <h1>Configurator</h1>

  <router-link :to="{ name: 'constructor' }">constructor</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Configurator',

  setup() {

    return {

    }
  }
})
</script>

<style lang="scss">

</style>
