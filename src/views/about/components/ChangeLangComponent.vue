<script setup lang="ts">
import Globe from "../../../icons/Globe.vue";
import {useAppStore} from "../../../stores/modules/app.ts";

const appStore = useAppStore();
const clickHandler = function() {
  appStore.changeLanguage();
}
</script>

<template>
  <div class="cursor-pointer flex items-center bg-gray-400 bg-opacity-50 text-black shadow-md dark:bg-black dark:bg-opacity-50 dark:text-gray-400 transition hover:bg-gray-200 hover:text-black dark:hover:bg-gray-400 p-4 rounded-xl dark:hover:text-black"
       @click="clickHandler">
    <div class="h-8 w-8 overflow-hidden">
      <globe class="fill-current"/>
    </div>
    <span class="px-4">
      <button>
        {{ appStore.langTitle}}
      </button>
    </span>
  </div>
</template>

<style scoped>

</style>