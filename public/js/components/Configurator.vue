<template>
  <DashboradTemplate>
    <template v-slot:topPanel>

    </template>

    <template v-slot:navPanel>

    </template>

    <template v-slot:context>
      <router-view></router-view>
    </template>

    <template v-slot:footer>
      <div class="footer">
        <div class="email">
          <span>sagit117@gmail.com 2021</span>
        </div>
      </div>
    </template>
  </DashboradTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboradTemplate from './templates/Dashboard-template.vue'

export default defineComponent({
  name: 'Configurator',

  components: {
    DashboradTemplate
  },

  setup() {

  }
})

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  box-sizing: border-box;
  align-items: center;

  .email {

    span {
      font-weight: bold;
      color: var(--mute);
      font-size: .9rem;
    }
  }
}
</style>
