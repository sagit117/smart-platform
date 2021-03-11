<template>
  <select :class="{ dark }" :value="value" @change="event => $emit('update:value', event.target.value)">
    <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'list-box',

  emits: [ 'update:value' ],

  props: {
    dark: Boolean,
    options: {
      type: Array as PropType<string[]>,
    },
    value: {
      type: String
    },
  },

  setup() {

    return {

    }
  }
})
</script>

<style lang="scss" scoped>
select {
  display: block;
  padding: .75rem .25rem;
  width: 100%;
  border-radius: .25rem;
  border: 1px solid var(--background-no-active);
  outline: none;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-normal);
  background-color: var(--background-active);
  box-sizing: border-box;
  cursor: pointer;
  min-width: 6rem;
  color: var(--text-normal);
}
select:focus {
  box-shadow: 0px 0px 0px .25rem rgba(49, 132, 253, 0.5);
  border-width: 1px;
}
.dark {
  background-color: var(--background-dark);
  color: var(--text-for-dark);
}
</style>
