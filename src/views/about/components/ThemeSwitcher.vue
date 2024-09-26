<script setup lang="ts">
import {ref, watch} from "vue";
import {useAppStore} from "../../../stores/modules/app.ts";
import data from "../../../stores/data";
import MoonIcon from "../../../icons/MoonIcon.vue";
import SunIcon from "../../../icons/SunIcon.vue";

const appStore = useAppStore();

const label = data.theme_mode
const lang = appStore.lang

const nightMode = ref((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)))
const handler = function () {
  nightMode.value = !nightMode.value;
}

const mouseEnterHandler = function () {
  if (nightMode.value) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}

const mouseLeaveHandler = function () {
  if (nightMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(nightMode, (newValue) => {
  if (newValue) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  }
});
</script>

<template>
  <div
      class="cursor-pointer flex items-center bg-gray-400 bg-opacity-50 text-black shadow-md dark:bg-black dark:bg-opacity-50 dark:text-gray-400 transition hover:bg-gray-200 hover:text-black dark:hover:bg-gray-400 p-4 rounded-xl dark:hover:text-black rounded-lg"
      @mouseenter="mouseEnterHandler"
      @mouseleave="mouseLeaveHandler"
      @click="handler">
    <div class="h-8 w-8 overflow-hidden">
      <transition
          name="fade"
          mode="out-in">
        <MoonIcon v-if="nightMode" class="fill-current h-8"/>
        <SunIcon v-else class="fill-current h-8"/>
      </transition>
    </div>

    <transition name="fade" mode="out-in">
      <span class="px-4" v-if="nightMode">
        {{ label.night_mode[lang] }}
      </span>
      <span class="px-4" v-else>
        {{ label.light_mode[lang] }}
      </span>
    </transition>
  </div>
</template>

<style scoped>
</style>