<template>
  <div
      class="message-container"
      :class="{
        success: message.status === 'success',
        error: message.status === 'error'
      }"
  >
    <div class="message-close" @click="$emit('close')">
      <svg
        style="width:24px;height:24px" viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" />
      </svg>
    </div>

    <div class="message-title">
      <svg
        style="width:24px;height:24px"
        viewBox="0 0 24 24"
        v-if="message.status === 'success'"
        class="color-success"
      >
        <path fill="currentColor" d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
      </svg>

      <svg
        style="width:24px;height:24px"
        viewBox="0 0 24 24"
        v-if="message.status === 'error'"
        class="color-error"
      >
        <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>

      <h3
        :class="{
          'color-success': message.status === 'success',
          'color-error': message.status === 'error'
        }"
      >{{ message.title }}</h3>
    </div>

    <div class="message-text" v-html="message.text"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Message',

  props: {
    message: {
      type: Object,
      required: true
    }
  },

  emits: [ 'close' ],

  setup() {

  }
})
</script>

<style scoped>
  .message-container {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    min-width: 40%;
    background-color: #fff;
    color: #0e0e0e;
  }
  .success {
    border-left: 1rem solid var(--success);
  }
  .error {
    border-left: 1rem solid var(--danger);
  }
  .message-close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: var(--primary);
  }
  .message-close > svg:hover {
    color: var(--mute);
  }
  .color-error {
    color: var(--danger);
  }
  .color-success {
    color: var(--success);
  }
  .message-title {
    display: flex;
    margin-bottom: 2rem;
  }
  .message-title > h3 {
    margin: 0 0 0 1rem;
  }
</style>
