<template>
  <div class="lang">
    <ListBox dark :options="languages" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import ListBox from './ListBox.vue'

import { LANGUAGES } from '../../../../src/dictionary/language'

export default defineComponent({
  name: 'change-lang',

  components: {
    ListBox
  },

  setup() {
    const languages = ref<string[]>(Object.keys(LANGUAGES))

    return {
      languages
    }
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
