<template>
  <div class="lang">
    <ListBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListBox from './ListBox.vue'

export default defineComponent({
  name: 'change-lang',

  components: {
    ListBox
  },

  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .lang {
    margin-right: .5rem;
    display: flex;
    align-self: center;
  }
</style>
