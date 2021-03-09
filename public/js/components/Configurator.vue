<template>
  <div class="container">
    <div class="top-panel">

    </div>

    <div class="nav-panel">

    </div>

    <div class="context">
      <router-view></router-view>
    </div>

    <div class="footer">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Configurator',

  setup() {

    return {

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
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;

  .top-panel {
    grid-area: topPanel;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px #a5a5a5;
    z-index: 1;
    background-color: dodgerblue;
  }

  .context {
    grid-area: context;
    background-color: #fff;
  }

  .nav-panel {
    grid-area: navPanel;
    background-color: #212529;
    box-shadow: 7px 7px 6px 0px #a5a5a5;
    z-index: 1;
  }

  .footer {
    grid-area: footer;
    background-color: #212529;
    z-index: 1;
  }
}
</style>
