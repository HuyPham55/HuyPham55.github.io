<script setup lang="ts">
import {computed, onMounted, ref, toRef} from "vue";
import simplebar from "simplebar-vue";
import Header from "./components/Header.vue";
import {useAppStore} from "../stores/modules/app.ts";

const appStore = useAppStore();

const isSticky = computed(() => appStore.isSticky);
const preventDevTools = function () {
  document.onkeydown = function (e) {
    if ((e.ctrlKey && e.shiftKey && [67, 73, 74, 85].find(item => item == e.keyCode)) || e.keyCode == 123) {
      return false;
    }
  }
}
//preventDevTools();

const scrollHandler = function () {
  appStore.clientHeight = document.querySelector(".simplebar-content-wrapper")?.scrollTop || 0;
}

const easterEgg = function () {
  console.log("%cHey hello there! :)", "color:red; font-size: 30px;")
  console.log("You have found an Easter Egg. Well done!")
}

const runningTitle = function () {
  let text = "Pham Duc Huy - Résumé - ";
  if (text) {
    setInterval(() => {
      let firstSpaceIndex = text.indexOf(' ') + 1;
      text = text.substr(firstSpaceIndex) + text.substr(0, firstSpaceIndex);
      window.document.title = text;
    }, 1000);
  }
}

appStore.changeLanguage()
onMounted(() => {
  preventDevTools()
  easterEgg()
  runningTitle()
})
</script>

<template>
  <div class="main-container">
    <img src="/images/background.jpg"
         class="object-cover absolute w-full h-full"
         alt="">
    <simplebar
        data-simplebar-auto-hide="true"
        class="flex flex-col h-full w-full"
        @scroll="scrollHandler"
        id="simplebarScroller">
      <Header :isSticky="isSticky"/>
      <router-view :key="$route.path" v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </simplebar>
  </div>
</template>

<style scoped>

</style>