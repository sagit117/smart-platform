<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-form">
        <div class="login-form--items">
          <label>Введите email:</label>
          <input type="text" v-model="email">
        </div>

        <div class="login-form--items mt-2">
          <label>Введите пароль:</label>
          <input type="password" v-model="password">
        </div>

        <div class="login-form--events mt-2">
          <Button
            class="primary"
            caption="Войти"
            @click="loginHandler"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Button from './Button.vue'

export default defineComponent({
  name: 'smart-login',

  components: {
    Button,
  },

  setup() {
    const email = ref<string>('')
    const password = ref<string>('')

    function loginHandler(): void {
      console.log(email.value)
    }

    return {
      email,
      password,
      loginHandler
    }
  }

})
</script>
<style scoped>
  .container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--background-no-active);
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .login-wrapper {
    display: flex;
    background-color: var(--background-active);
    border-radius: 15px;
    padding: 2rem;
    flex-direction: column;
  }
  .login-form--items {
    display: flex;
    flex-direction: column;
  }
</style>
