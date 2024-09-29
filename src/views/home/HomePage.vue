<script lang="ts">
import StackOverflow from "@/icons/StackOverflow.vue";
import Email from "@/icons/Email.vue";
import GitHub from "@/icons/GitHub.vue";
import LinkedIn from "@/icons/LinkedIn.vue";
import data from "@/stores/data";
import {defineComponent} from "vue";
import Signature from "@/icons/Signature.vue";
import {Social} from "@/stores/data/types.ts";
export default defineComponent({
  name: "HomePage",
  components: {
    Signature,
    StackOverflow,
    Email,
    GitHub,
    LinkedIn,
  },
  data() {
    return {
      socials: [] as Social[]
    }
  },
  created: function () {
    this.socials = data.socials;
  },
})
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="box-border py-4">
      <Signature/>
    </div>

    <div class=" mb-8 box-border py-4 mx-auto flex justify-evenly w-4/5 md:w-2/3 opacity-75 transition duration-500 bg-gray-400 rounded-3xl bg-opacity-25 hover:bg-opacity-50 backdrop-blur">
      <a class="has-tooltip p-4 hover:bg-gray-300 dark:hover:bg-black rounded-full text-gray-200 hover:text-black dark:text-black dark:hover:text-gray-200 transition-all"
         v-for="item in socials"
         :key="item.title"
         target="_blank"
         :href="item.href">
        <span class="tooltip">
          {{ item.title }}
        </span>
        <Component :is="item.icon" class="fill-current h-8"/>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>