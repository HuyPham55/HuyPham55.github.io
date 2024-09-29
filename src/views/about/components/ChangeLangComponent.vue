<script setup lang="ts">
import Globe from "@/icons/Globe.vue";
import {useAppStore} from "@/stores/modules/app.ts";

const appStore = useAppStore();
const clickHandler = function() {
  appStore.changeLanguage();
}
</script>

<template>
  <div class="cursor-pointer flex items-center bg-primary bg-primary-hover text-primary shadow-md  transition hover:text-black p-4 rounded-lg dark:hover:text-black"
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