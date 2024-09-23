<script setup lang="ts">
import BriefCaseIcon from "../../icons/BriefCaseIcon.vue";
import BirthdayCakeIcon from "../../icons/BirthdayCakeIcon.vue";
import LocationIcon from "../../icons/LocationIcon.vue";
import EmailIcon from "../../icons/EmailIcon.vue";
import Globe from "../../icons/Globe.vue";
import Media from "../../icons/Media.vue";
import DownloadIcon from "../../icons/DownloadIcon.vue";

import CountUp from "./components/CountUp.vue";
import TechnologyComponent from "./components/TechnologyComponent.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import ModalForm from "./components/ModalForm.vue";

import data from "../../stores/data";
import {useAppStore} from "../../stores/modules/app.ts";
import {computed, onMounted, ref} from "vue";
import ChangeLangComponent from "./components/ChangeLangComponent.vue";

const details = data.details
const timeline = ref(data.timeline)
const experiences = ref(data.experiences)
const technologies = ref(data.technologies)
const media_skills = ref(data.media_skills)
const communications = ref(data.communications)
const form = data.form;
const appStore = useAppStore()
const lang = computed(() => appStore.lang)
const label = computed(() => appStore.label)

function isTimelineHovered() {
  return timeline.value.find(item => item.hover);
}

const hoverHandler = function (item, value) {
  item.hover = value;
}

const containerHeight = ref(0);

const modalForm = computed(() => {
  return appStore.clientHeight + containerHeight.value === document.querySelector(".simplebar-content")?.clientHeight
})

onMounted(() => {
  containerHeight.value = document.querySelector(".simplebar-content-wrapper")?.clientHeight || 0
})
</script>

<template>
  <div>
    <div class="about--container">
      <aside class="md:w-1/3">
        <div
            class="border-b md:border-b-0 md:mb-4 md:border-r border-gray-400 border-opacity-75 py-4 md:py-0 md:px-4 mx-4 md:mx-0 md:sticky top-24">
          <div class="profile-picture">
          </div>
          <div class="text-center font-bold uppercase text-3xl md:text-xl">
            <h1 class="mt-4">{{ details['name'][lang] }}</h1>
          </div>
          <div class="p-0 lg:p-4">
            <h1 class="hidden md:block text-center background__translucent rounded">
              {{ label['details'][lang] }}
            </h1>
            <div class="detail--container">
              <brief-case-icon/>
              <span>Web developer</span>
            </div>
            <div class="detail--container">
              <birthday-cake-icon/>
              <span>2000</span>
            </div>
            <div class="detail--container">
              <location-icon/>
              <address>{{ details['address'][lang] }}</address>
            </div>
            <div class="detail--container">
              <email-icon/>
              <a href="mailto:huyducphamofficial@gmail.com">huyducphamofficial@gmail.com</a>
            </div>
          </div>
        </div>
      </aside>

      <article class="md:w-2/3 p-4">
        <section class="py-4" v-if="timeline.length">
          <h1 :class="['section--title', isTimelineHovered()?'active':'']">
            {{ label['titles']['education'][lang] }}
          </h1>
          <div class="mt-4">
            <div class="flex flex-col md:grid grid-cols-9 mx-auto lg:p-2">
              <div v-for="(item, index) in timeline"
                   :class="['flex md:contents', index%2?'':'flex-row-reverse justify-end']"
                   :key="item.title">
                <!-- left -->
                <div class="col-start-1 background hover--effect col-end-5 my-4 cursor-pointer"
                     v-if="!index%2"
                     @mouseover="hoverHandler(item, true)"
                     @mouseleave="hoverHandler(item, false)">
                  <h3 :class="{'font-semibold text-base mb-1':1, 'underline':item.hover }">
                    {{ item.title }}
                  </h3>
                  <p class="leading-tight font-serif">
                    {{ item.content[lang] }}
                  </p>
                </div>
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-400 opacity-75 pointer-events-none"/>
                  </div>
                  <div
                      :class="['transform transition w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow-md', item.hover?'bg-gray-200 scale-110':'bg-gray-400']"/>
                </div>
                <!-- right -->
                <div
                    v-if="index%2"
                    class="background hover--effect col-start-6 col-end-10 my-4 cursor-pointer"
                    @mouseover="hoverHandler(item, true)"
                    @mouseleave="hoverHandler(item, false)">
                  <h3 :class="{'font-semibold text-base mb-1':1, 'underline':item.hover }">
                    {{ item.title }}
                  </h3>
                  <p class="leading-tight font-serif">
                    {{ item.content[lang] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-4">
          <h1 class="section--title">
            {{ label['titles']['abilities'][lang] }}
          </h1>
          <div class="lg:p-2">
            <div
                class="background hover--effect flex flex-row-reverse items-center justify-end mt-4">
              <h3 class="">
                Website development & maintenance
              </h3>
              <div class="pr-4">
                <Globe class="h-12 fill-current"/>
              </div>
            </div>
            <div
                class="background hover--effect flex flex-row-reverse items-center justify-end mt-4">
              <h3 class="">
                Media content editor
              </h3>
              <div class="pr-4">
                <Media class="h-12 fill-current"/>
              </div>
            </div>
          </div>
        </section>
        <section class="py-4" v-if="experiences.length">
          <h1 class="section--title">
            {{ label['titles']['work_experience'][lang] }}
          </h1>
          <div class="lg:p-2">
            <div class="background hover--effect mt-4 flex justify-around flex-wrap">
              <div class="flex flex-col text-center py-4 p-2"
                   v-for="experience in experiences"
                   :key="experience.number+experience.suffix">
                <CountUp
                    keep-alive="keep-alive"
                    :count-to="experience.number"
                    :suffix="experience.suffix"
                    class="text-3xl xl:text-5xl font-bold"/>
                <p class="mt-4">
                  {{ experience.title[lang] }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-4" v-if="technologies.length">
          <h1 class="section--title">
            {{ label['titles']['technical_skill'][lang] }}
          </h1>
          <technology-component class="lg:p-2" :technologies="technologies" :lang="lang"/>
        </section>

        <section class="py-4">
          <h1 class="section--title">
            {{ label['titles']['media_skill'][lang] }}
          </h1>
          <div class="lg:p-2">
            <div class="mt-4 px-4">
              <i>{{ media_skills.description[lang] }}</i>
            </div>
            <ul class="background mt-4 justify-around flex p-4 flex-wrap">
              <li class="mx-4 my-4 h-auto w-20">
                <img src="/images/icons/photoshop-cc-4.svg" alt="" class="shadow-md cursor-pointer"
                     title="Adobe Photoshop" loading="lazy"
                     style="box-shadow: 0 0 50px 0 #31c5f0">
              </li>
              <li class="mx-4 my-4 h-auto w-20">
                <img src="/images/icons/premiere-cc.svg" alt="" class="shadow-md cursor-pointer"
                     title="Adobe Premiere" loading="lazy"
                     style="box-shadow: 0 0 50px 0 #e579ff">
              </li>
              <li class="mx-4 my-4 h-auto w-20">
                <img src="/images/icons/after-effects-cc.svg" alt="" class="shadow-md cursor-pointer"
                     title="Adobe After Effect" loading="lazy"
                     style="box-shadow: 0 0 50px 0 #d8a1ff">
              </li>
            </ul>
          </div>
        </section>
        <section class="py-4">
          <h1 class="section--title">
            {{ label['titles']['communication'][lang] }}
          </h1>
          <div class="lg:p-2">
            <div class="mt-4 p-4 flex flex-col md:flex-row justify-around flex-wrap background">
              <div class="card" v-for="(item, index) in communications" :key="index">
                <div class='para' :style="`background-image: url(${item.icon})`">
                </div>
                <div class="card--content">
                  <h2 class="font-semibold text-base mb-1">
                    {{ item.title[lang] }}
                  </h2>
                  <p>{{ item.description[lang] }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
    <section class="about--container justify-evenly">
      <div class="mt-4 mx-4 md:mr-0 flex-grow transition md:w-0">
        <theme-switcher/>
      </div>
      <div class="mt-4 mx-4 md:mr-0 flex-grow transition md:w-0">
        <div class="cursor-pointer flex items-center background hover--effect rounded-lg">
          <div class="h-8 w-8 overflow-hidden">
            <download-icon/>
          </div>
          <span class="px-4">
            {{ label['save_a_copy'][lang] }}
          </span>
        </div>
      </div>
      <div class="my-4 mx-4 flex-grow transition md:w-0">
        <ChangeLangComponent/>
      </div>
    </section>
    <ModalForm :formData="form" :lang="lang" :show-form="modalForm" v-if="appStore.isSticky"/>
  </div>
</template>

<style scoped>

</style>