<template>
  <button index="0" :class="{ noActive: loading }">
    {{ caption }}
    <Spiner v-if="loading"/>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Spiner from './Spiner.vue'

export default defineComponent({
  name: 'smart-button',

  components: {
    Spiner
  },

  props: {
    caption: {
      type: String
    },
    loading: {
      type: Boolean
    }
  },
})
</script>

<style lang="scss" scoped>
  button {
    display: flex;
    position: relative;
    justify-content: center;
    text-transform: uppercase;
    border-radius: .25rem;
    padding: .75rem;
    cursor: pointer;
    border: 2px solid;
    font-weight: bold;
    outline: none;
    user-select: none;
  }
  .noActive {
    cursor: not-allowed;
  }
  .primary {
    background-color: var(--primary);
    color: #fff;
    border-color: var(--primary);
  }
  .primary:active {
    background-color: var(--primary-active);
  }
  .primary:focus {
    box-shadow: 0px 0px 0px .25rem rgba(49, 132, 253, 0.5);
  }
  .success {
    background-color: var(--success);
    color: #fff;
    border-color: var(--success);
  }
  .success:active {
    background-color: var(--success-active);
  }
  .success:focus {
    box-shadow: 0px 0px 0px .25rem rgba(60, 153, 110, 0.5);
  }
</style>
