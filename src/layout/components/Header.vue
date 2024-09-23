<script setup lang="ts">
import {useAppStore} from "../../stores/modules/app.ts";
import {computed} from "vue";
import {useRouter} from "vue-router";
defineProps(['isSticky'])

const router = useRouter()
const store = useAppStore();
const label = computed(() => store.label);
const allRoutes = computed(() => router.options.routes.pop()?.children);
const lang = computed(() => store.lang);
</script>

<template>
  <nav ref="nav"
       :class="[isSticky?'sticky':'relative']"
       role="navigation">
    <ul class="flex justify-around md:justify-evenly nav">
      <li class="py-8 transition"
          v-for="route in allRoutes"
          :key="route.name">
        <router-link :to="route.path" class="nav-link">
          {{ label[route.name][lang] }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>