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
