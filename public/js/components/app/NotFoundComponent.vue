<template>
  <h3>{{ L.translate('Ресурс не найден') }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Lang from '../../../../src/dictionary/language'
const L = new Lang(localStorage.getItem('language') || 'rus')

export default defineComponent({
  name: 'not-found',

  setup() {
    return {
      L
    }
  }
})
</script>
