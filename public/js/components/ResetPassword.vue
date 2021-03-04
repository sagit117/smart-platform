<template>
  <Login stateWin="changePass" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from './Login.vue'

export default defineComponent({
  name: 'reset-password',

  components: {
    Login
  }
})

</script>
