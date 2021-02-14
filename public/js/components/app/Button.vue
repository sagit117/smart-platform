<template>
  <button index="0">{{ caption }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'smart-button',

  props: {
    caption: {
      type: String
    }
  },
})
</script>

<style>
  button {
    text-transform: uppercase;
    border-radius: .25rem;
    padding: .75rem;
    cursor: pointer;
    border: 2px solid;
    font-weight: bold;
    outline: none;
    user-select: none;
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
