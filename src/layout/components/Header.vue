<script setup lang="ts">
import {useAppStore} from "../../stores/modules/app.ts";
import {computed} from "vue";
import {useRouter} from "vue-router";
import {PageLabels} from "../../stores/data/types.ts";
defineProps(['isSticky'])

const router = useRouter()
const store = useAppStore();
const label = computed(() => store.label);
const allRoutes = computed(() => {
  let arr = router.options.routes;
  return arr[0]?.children
});
const lang = computed(() => store.lang);

const getTitle = function(route: any) {
  let key = route.name as keyof PageLabels;
  if (key === 'home' || key === 'about') {
    //TODO: Added automated recognition for route.name (instead of explicit declaring)
    return label.value[key][lang.value]
  }
}
</script>

<template>
  <nav ref="nav"
       :class="[isSticky?'sticky':'relative', 'inset-x-0 top-0 z-40 bg-opacity-50 bg-gray-300 dark:bg-opacity-50 dark:bg-black backdrop-blur shadow-lg']"
       role="navigation">
    <ul class="flex justify-around md:justify-evenly nav">
      <li class="py-8 transition"
          v-for="route in allRoutes"
          :key="route.name">
        <router-link :to="route.path" class="md:px-4 relative py-8 transition-transform dark:text-gray-400 dark:hover:text-gray-200 hover:underline text-lg font-bold uppercase md:text-xl">
          {{getTitle(route)}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>