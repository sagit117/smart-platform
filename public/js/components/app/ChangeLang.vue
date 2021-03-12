<template>
  <div class="lang">
    <ListBox dark :options="languages" v-model:value.trim="selectedLang" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

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

    const store = useStore()

    watch(() => selectedLang.value, (val) => {
      // сохранение языка перевода
      const lang = val.trim() || 'rus'

      localStorage.setItem('language', lang)
      store.commit('setLang', lang)
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
