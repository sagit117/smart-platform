<template>
  <div class="lds-dual-ring"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'smart-spiner'
})
</script>

<style lang="scss" scoped>
  .lds-dual-ring {
    position: absolute;
    top: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
  .lds-dual-ring:after {
    content: " ";
    display: flex;
    position: absolute;
    left: -.75rem;
    width: 1.75rem;
    height: 1.75rem;
    /*margin: 8px;*/
    border-radius: 50%;
    border: 6px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
