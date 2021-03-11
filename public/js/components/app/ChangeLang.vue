<template>
  <div class="lang">
    <ListBox dark :options="languages" v-model:value.trim="selectedLang" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import ListBox from './ListBox.vue'

import { LANGUAGES } from '../../../../src/dictionary/language'

export default defineComponent({
  name: 'change-lang',

  components: {
    ListBox
  },

  setup() {
    const languages = ref<string[]>(Object.keys(LANGUAGES))
    const selectedLang = ref<string>(localStorage.getItem('language') || 'rus')

    watch(() => selectedLang.value, (val) => {
      // сохранение языка перевода
      localStorage.setItem('language', val.trim() || 'rus')
    })

    return {
      languages,
      selectedLang
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
