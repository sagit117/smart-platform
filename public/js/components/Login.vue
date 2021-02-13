<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-form">
        <div class="login-form--items">
          <Inputin
              type="text"
              label="Введите email:"
              v-model:value.trim="email"
          >
            <template v-slot:ico>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
            </template>
          </Inputin>
        </div>

        <div class="login-form--items mt-2">
          <Inputin
              type="password"
              label="Введите пароль:"
              v-model:value.trim="password"
          >
            <template v-slot:ico>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
            </template>
          </Inputin>
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

import Button from './app/Button.vue'
import Inputin from './app/Inputin.vue'

export default defineComponent({
  name: 'smart-login',

  components: {
    Button,
    Inputin
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
    box-sizing: border-box;
  }
  .login-wrapper {
    width: 40%;
    min-width: 350px;
    display: flex;
    background-color: var(--background-active);
    border-radius: 15px;
    padding: 2rem;
    flex-direction: column;
    box-shadow: 2px 2px 6px black;
    border-top: 1.5rem solid var(--primary);
  }
  .login-form--items {
    display: flex;
    flex-direction: column;
  }
  .login-form--events {
    display: flex;
    justify-content: flex-end;
  }
</style>
