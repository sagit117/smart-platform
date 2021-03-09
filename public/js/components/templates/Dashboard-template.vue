<template>
  <div class="container" :class="{ fullScreen: !toggleMenu }">
    <div class="top-panel">
      <div class="toggle-menu" @click="toggleMenu = !toggleMenu">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" />
        </svg>
      </div>

      <slot name="topPanel"></slot>
    </div>

    <div class="nav-panel" v-if="toggleMenu">
      <slot name="navPanel"></slot>
    </div>
    <div class="wrapper" v-if="toggleMenu" @click="toggleMenu = !toggleMenu"></div>

    <div class="context">
        <slot name="context"></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Dashboard-template',

  setup() {
    const toggleMenu = ref<boolean>(false)

    return {
      toggleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-areas:
                      " topPanel topPanel "
                      " navPanel context "
                      " footer footer ";
  grid-template-rows: 3rem 1fr 3rem;
  grid-template-columns: 300px 1fr;
  grid-gap: 4px;
  border: 1px solid;
  min-height: 100vh;
  box-sizing: border-box;

  .top-panel {
    grid-area: topPanel;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px #a5a5a5;
    z-index: 1;
    background-color: dodgerblue;

    .toggle-menu {
      display: flex;
      align-items: center;
      width: fit-content;
      height: 100%;
      box-sizing: border-box;
      margin-left: .5rem;

      svg {
        cursor: pointer;
      }
      svg:hover {
        background-color: #2b81da;
        border-radius: 4px;
      }
      svg:active {
        box-shadow: 0px 0px 0px .25rem rgba(176, 188, 207, 0.5);
      }
    }
  }

  .context {
    grid-area: context;
    background-color: #fff;
  }

  .nav-panel {
    grid-area: navPanel;
    background-color: #212529;
    box-shadow: 7px 7px 6px 0px #a5a5a5;
    z-index: 10;
  }

  .footer {
    grid-area: footer;
    background-color: #212529;
    z-index: 10;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    z-index: 5;
  }
}

.fullScreen {
  grid-template-areas:
                      " topPanel "
                      " context "
                      " footer ";
  grid-template-columns: 1fr;
}
</style>
