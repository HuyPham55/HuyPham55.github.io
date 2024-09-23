<template>
  <div>
    <div v-for="(technology, key) in technologies" :key="key">
      <h3 class="text-center mt-4 select-none transition">
        {{ technology.title[lang] }}
      </h3>
      <ul class="technology--container">
        <li class="item--container" v-for="(item, index) in technology.items"
            :key="index+item.title">
          <a target="_blank" :href="item.url" :style="`color: ${item.colorClass}`" class="">
            <div class="icon--container"
                 :style="`color: ${item.colorClass?item.colorClass:'initial'}`"
                 v-for="i in 2" :key="item.title+i">
              <component :is="item.icon"
                         v-for="j in item.emphasize?2:1"
                         :class="[j===2?'animate-ping absolute':'', item.emphasize?'emphasize':'']"
                         :key="item.icon+i+j"/>
            </div>
          </a>
          <p><a :href="item.url" target="_blank">{{ item.title }}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//icons
import VueIcon from "../../../icons/VueIcon.vue";
import Tailwind from "../../../icons/Tailwind.vue";
import BootstrapIcon from "../../../icons/BootstrapIcon.vue";
import WebpackIcon from "../../../icons/WebpackIcon.vue";
import PostCSSIcon from "../../../icons/PostCSSIcon.vue";
import Laravel from "../../../icons/Laravel.vue";
import RedisIcon from "../../../icons/RedisIcon.vue";
import HTMLIcon from "../../../icons/HTMLIcon.vue";
import CSSIcon from "../../../icons/CSSIcon.vue";
import JavaScriptIcon from "../../../icons/JavaScriptIcon.vue";
import AxiosLogo from "../../../icons/AxiosLogo.vue";
import GraphQLIcon from "../../../icons/GraphQLIcon.vue";
import jQueryIcon from "../../../icons/jQueryIcon.vue";
import MySQLIcon from "../../../icons/MySQLIcon.vue";
import PHPIcon from "../../../icons/PHPIcon.vue";
import DockerLogo from "../../../icons/DockerLogo.vue";
import ElasticsearchIcon from "../../../icons/ElasticsearchIcon.vue";

export default {
  name: "TechnologyComponent",
  props: {
    technologies: {
      type: Array,
      required: true,
    },
    lang: {
      type: null,
    }
  },
  components: {
    VueIcon,
    Tailwind,
    BootstrapIcon,
    WebpackIcon,
    PostCSSIcon,
    Laravel,
    RedisIcon,
    HTMLIcon,
    CSSIcon,
    JavaScriptIcon,
    AxiosLogo,
    GraphQLIcon,
    jQueryIcon,
    MySQLIcon,
    PHPIcon,
    DockerLogo,
    ElasticsearchIcon,
  },
  created: function () {
  },
  methods: {}
}
</script>

<style scoped>

</style>