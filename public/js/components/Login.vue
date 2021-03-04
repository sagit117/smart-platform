<template>
  <div class="container">

    <Message
        :message="message"
        v-if="message.show"
        @close="message.show = false"
    />

    <div class="login-wrapper">
      <transition name="fade" mode="out-in">
        <div class="login-form" v-if="state === 'login'">
          <h3 class="mt-0">Вход в систему</h3>

          <div class="login-form--items">
            <Inputin
                type="text"
                :label="labelsMessage.inputEmail"
                :validation="isValid(dataField.email.validation, dataField.email.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.email.value"
                @keypress.enter="loginHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
              </template>
            </Inputin>
          </div>

          <div class="login-form--items mt-2">
            <Inputin
                type="password"
                :label="labelsMessage.inputPassword"
                :validation="isValid(dataField.password.validation, dataField.password.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.password.value"
                @keypress.enter="loginHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </template>
            </Inputin>
          </div>

          <input type="hidden" v-model="antiSpam">

          <div class="login-form--events mt-2">
            <div class="change-pass">
              <span @click="state = 'reset'">{{ labelsMessage.resetPass }}</span>
            </div>


            <Button
                class="success mr-2"
                :caption="labelsMessage.registration"
                @click="state = 'registration'"
            />

            <Button
                class="primary"
                :caption="labelsMessage.entry"
                @click="loginHandler"
            />
          </div>
        </div>

        <div class="login-form" v-else-if="state === 'registration'">
          <h3 class="mt-0">{{ labelsMessage.regOfSystem }}</h3>

          <div class="login-form--items">
            <Inputin
                type="text"
                :label="labelsMessage.inputEmail"
                :validation="isValid(dataField.email.validation, dataField.email.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.email.value"
                @keypress.enter="registrationHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
              </template>
            </Inputin>
          </div>

          <div class="login-form--items mt-2">
            <Inputin
                type="password"
                :label="labelsMessage.inputPassword"
                :validation="isValid(dataField.password.validation, dataField.password.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.password.value"
                @keypress.enter="registrationHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </template>
            </Inputin>
          </div>

          <div class="login-form--items mt-2">
            <Inputin
                type="password"
                :label="labelsMessage.confirmPassword"
                :validation="isValid(confirmPassword.validation, confirmPassword.value)"
                :onValidation="onValidation"
                v-model:value.trim="confirmPassword.value"
                @keypress.enter="registrationHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </template>
            </Inputin>
          </div>

          <input type="hidden" v-model="antiSpam">

          <div class="login-form--events mt-2">
            <Button
                class="success mr-2"
                :caption="labelsMessage.entry"
                @click="state = 'login'"
            />

            <Button
                class="primary"
                :caption="labelsMessage.endRegistration"
                :loading="loading"
                @click="registrationHandler"
            />
          </div>
        </div>

        <div class="login-form" v-else-if="state === 'reset'">
          <h3 class="mt-0">{{ labelsMessage.resetPass }}</h3>

          <div class="login-form--items">
            <Inputin
                type="text"
                :label="labelsMessage.inputEmail"
                :validation="isValid(dataField.email.validation, dataField.email.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.email.value"
                @keypress.enter="restorePassHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
              </template>
            </Inputin>
          </div>

          <div class="login-form--events mt-2">
            <Button
                class="success mr-2"
                :caption="labelsMessage.entry"
                @click="state = 'login'"
            />

            <Button
                class="primary"
                :caption="labelsMessage.restorePass"
                :loading="loading"
                @click="restorePassHandler"
            />
          </div>

        </div>

        <div class="login-form" v-else-if="state === 'changePass'">
          <h3 class="mt-0">{{ labelsMessage.changePass }}</h3>

          <div class="login-form--items mt-2">
            <Inputin
                type="password"
                :label="labelsMessage.inputPassword"
                :validation="isValid(dataField.password.validation, dataField.password.value)"
                :onValidation="onValidation"
                v-model:value.trim="dataField.password.value"
                @keypress.enter="registrationHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </template>
            </Inputin>
          </div>

          <div class="login-form--items mt-2">
            <Inputin
                type="password"
                :label="labelsMessage.confirmPassword"
                :validation="isValid(confirmPassword.validation, confirmPassword.value)"
                :onValidation="onValidation"
                v-model:value.trim="confirmPassword.value"
                @keypress.enter="registrationHandler"
            >
              <template v-slot:ico>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </template>
            </Inputin>
          </div>

          <input type="hidden" v-model="antiSpam">

          <div class="login-form--events mt-2">
            <Button
              class="primary"
              :caption="labelsMessage.changePass"
              :loading="loading"
              @click="changePasswordHandler"
            />
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, nextTick, PropType } from 'vue'

import Button from './app/Button.vue'
import Inputin from './app/Inputin.vue'
import Spiner from  './app/Spiner.vue'
import Message from './app/Message.vue'

import { require, isValid, minLength, email, equal, checkValid, IValidation } from "./utils/validation";
import * as API from "../api/userApi"
import * as I from './interfaces/messages-interfaces'
import { labelsMessage, validateErrorMessages, serverTitlesMessages, errorMessages, successMessages } from './utils/language'

interface IDataField {
  email: IField,
  password: IField,
}

interface IField {
  value: string,
  validation?: IValidation
}

type stateWindow = 'login' | 'registration' | 'reset' | 'changePass'

export default defineComponent({
  name: 'smart-login',

  components: {
    Button,
    Inputin,
    Spiner,
    Message
  },

  props: {
    stateWin: {
      type: String as PropType<stateWindow>,
      default: 'login'
    }
  },

  setup(props) {
    // данные полей
    const dataField = reactive({
      email: {
        value: '',
        validation: {
          require: {
            errorMessage: validateErrorMessages.require,
            method: require
          },
          minLength: {
            value: 6,
            errorMessage: validateErrorMessages.minLength,
            method: minLength,
          },
          email: {
            errorMessage: validateErrorMessages.wrongEmail,
            method: email
          }
        }
      },
      password: {
        value: '',
        validation: {
          require: {
            errorMessage: validateErrorMessages.require,
            method: require
          },
        }
      }
    }) as IDataField
    const confirmPassword = reactive({
      value: '',
      validation: {
        require: {
          errorMessage: validateErrorMessages.require,
          method: require
        },
        equal: {
          value: computed(() => dataField.password.value),
          errorMessage: validateErrorMessages.equalPassword,
          method: equal
        }
      }
    }) as IField
    const antiSpam = ref<string>('') // анти-спам поле

    // выбор какое окно отобразить login / registration
    const state = ref<stateWindow>(props.stateWin)

    // флаг для проверки валидации при нажатие кнопки логин или регистрация
    const onValidation = ref<boolean>(false)

    // API users
    const userAPI = new API.UserAPI()

    // Индикатор загрузки
    const loading = ref<boolean>(false)

    // обработчики логина и регистрации
    const message = reactive({
      title: '',
      text: '',
      status: 'success',
      show: false
    }) as I.IMessage

    function loginHandler(): void { // логин
      if (loading.value) return

      onValidation.value = true

      // все поля корректно заполнены
      if (checkValid(dataField)) {
        userAPI.loginWithEmail({
          email: dataField.email.value,
          password: dataField.password.value,
          antiSpam: antiSpam.value
        })
          .then((response): void => {
            loading.value = false

            console.log(serverTitlesMessages.auth, response.message)

            if (response.success) {
              Object.assign(message, {
                show: true,
                title: successMessages.auth,
                text: labelsMessage.relocate,
                status: 'success'
              })

              setTimeout(() => location.replace(location.pathname), 5000)
            } else {
              Object.assign(message, {
                show: true,
                title: errorMessages.authTitle,
                text: labelsMessage.errorAuth,
                status: 'error'
              })
            }
          })
          .catch(error => {
            loading.value = false
            console.error(errorMessages.auth, error)
          })
      }

      nextTick(() => {
        onValidation.value = false
      })
    }

    function registrationHandler(): void { // регистрация
      if (loading.value) return

      onValidation.value = true

      // все поля корректно заполнены
      if (checkValid({ dataField, confirmPassword })) {
        // пытаемся зарегистрироваться
        loading.value = true

        userAPI.registrationWithEmail({
          email: dataField.email.value,
          password: dataField.password.value,
          antiSpam: antiSpam.value
        })
            .then((response): void => {
              loading.value = false
              console.log(serverTitlesMessages.registry, response.message)

              if (response.success) {
                // регистрация успешна
                Object.assign(message, {
                  show: true,
                  title: successMessages.registry,
                  text: successMessages.sendEmailByAuth(dataField.email.value),
                  status: 'success'
                })

                state.value = 'login'
              } else {
                // ошибка при регистрации
                Object.assign(message, {
                  show: true,
                  title: errorMessages.registryTitle,
                  text: response.message,
                  status: 'error'
                })
              }
            })
            .catch(error => {
              loading.value = false
              console.error(errorMessages.registry, error)
            })
      }

      nextTick(() => {
        onValidation.value = false
      })
    }

    function restorePassHandler(): void {
      if (loading.value) return

      onValidation.value = true

      if (checkValid({ email: dataField.email })) {
        userAPI.restorePassword(dataField.email.value)
          .then((response): void => {
            loading.value = false
            console.log(serverTitlesMessages.restorePass, response.message)

            if (response.success) {
              // запрос обработан успешно
              Object.assign(message, {
                show: true,
                title: successMessages.requestSuccess,
                text: successMessages.sendEmailByResetPass(dataField.email.value),
                status: 'success'
              })

              state.value = 'login'
            } else {
              // ошибка при запросе востановления пароля
              Object.assign(message, {
                show: true,
                title: errorMessages.restorePass,
                text: response.message,
                status: 'error'
              })
            }

          })
          .catch(error => {
            loading.value = false
            console.error(errorMessages.restorePass, error)
          })
      }

      nextTick(() => {
        onValidation.value = false
      })
    }

    function changePasswordHandler(): void {
      if (loading.value) return

      onValidation.value = true

      if (checkValid({ pass: dataField.password, confirmPassword })) {
        const hash: string[] = location.pathname.split('/')

        userAPI.changePassword({
          password: dataField.password.value,
          antiSpam: antiSpam.value,
          hash: hash[hash.length - 1]
        })
          .then((response): void => {
            loading.value = false
            console.log(serverTitlesMessages.changePass, response.message)

            if (response.success) {
              // смена пароля прошла успешно
              Object.assign(message, {
                show: true,
                title: successMessages.requestSuccess,
                text: successMessages.changePass,
                status: 'success'
              })

              state.value = 'login'
            } else {
              Object.assign(message, {
                show: true,
                title: errorMessages.changePass,
                text: response.message,
                status: 'error'
              })
            }
          })
          .catch(error => {
            loading.value = false
            console.error(errorMessages.registry, error)
          })
      }

      nextTick(() => {
        onValidation.value = false
      })
    }

    return {
      dataField,
      state,
      confirmPassword,
      onValidation,
      antiSpam,
      loading,
      message,
      labelsMessage,
      loginHandler,
      registrationHandler,
      isValid,
      restorePassHandler,
      changePasswordHandler
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
    max-width: 400px;
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

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .loading {
    width: 1.5rem;
    height: 1.5rem;
  }

  .change-pass {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .change-pass > span {
    cursor: pointer;
  }
  .change-pass > span:hover {
    color: var(--primary)
  }
</style>
