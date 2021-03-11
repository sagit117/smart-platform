<template>
  <div class="inputin-wrapper">
    <label>{{ label }}</label>
    <div class="inputin-control">
      <div class="inputin-control--ico">
        <slot name="ico"></slot>
      </div>

      <input
          index="0"
          :type="type"
          :value="value"
          :class="{
            'padding-ico': isPaddingIco,
            error: invalidMessage.length > 0 && onShowError
          }"
          @input="event => $emit('update:value', event.target.value)"
          @blur="onShowError = true"
      >
    </div>

    <small class="mt-1">
      {{ onShowError ? invalidMessage[0] : '' }}
    </small>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from 'vue'

import { IValidation } from "../utils/validation";

export default defineComponent({
  name: 'smart-input',

  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      require: true
    },
    value: {
      type: String
    },
    validation: {
      type: Object as PropType<IValidation>
    },
    onValidation: {
      type: Boolean
    }
  },

  emits: [ 'update:value', 'errorMessages' ],

  setup(props, { slots }) {
    const isPaddingIco = ref<boolean>(!!slots.ico)
    const onShowError = ref<boolean>(false)
    const invalidMessage = computed(() => {
      const obj: IValidation = props?.validation || {}
      // ---

      const keys: string[] = Object.keys(obj)
      const messages: string[] = []

      keys.forEach(key => {
        if (!obj[key].isValid) messages.push(obj[key]?.errorMessage || '')
      })

      return messages
    })

    watch(() => props.onValidation, (onValidation) => {
      if (onValidation) onShowError.value = true
    })

    return {
      isPaddingIco,
      invalidMessage,
      onShowError
    }
  }
})
</script>

<style lang="scss" scoped>
  .inputin-wrapper {
    display: flex;
    flex-direction: column;
  }
  .inputin-control {
    display: flex;
    position: relative;
  }
  .inputin-control--ico {
    position: absolute;
    top: 1.25rem;
    padding-left: .25rem;
  }
  input {
    display: block;
    padding: .75rem .25rem;
    margin-top: .5rem;
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
  }
  input:focus {
    box-shadow: 0px 0px 0px .25rem rgba(49, 132, 253, 0.5);
    border-width: 1px;
  }
  label {
    font-weight: 400;
    width: fit-content;
  }
  .padding-ico {
    padding-left: 2rem !important;
  }
  small {
    display: flex;
    color: var(--danger);
  }
  .error {
    border-color: var(--danger);
  }
  .error:focus {
    box-shadow: 0px 0px 0px .25rem rgb(253, 49, 56, 0.5);
  }
</style>
