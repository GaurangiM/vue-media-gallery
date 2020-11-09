<template>
  <div id="app">
    <div id="content">
        <AppNavBar></AppNavBar>
      <transition name="fade"
        mode="out-in">
        <router-view/>
      </transition>
      <AppFooter></AppFooter>
    </div>
      
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppFooter from '@/components/AppFooter.vue'
import AppNavBar from '@/components/AppNavBar.vue'

@Component({
  components: {
    AppFooter,
    AppNavBar
  }
})

export default class App extends Vue{

}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
