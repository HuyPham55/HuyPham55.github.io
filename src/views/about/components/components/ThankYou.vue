<template>
  <div class="form--container">
    <div>
      <h1>{{ formData.labels.thank_you.title[lang] }}</h1>
    </div>
    <div class="text-center">
      <i>{{ formData.labels.thank_you.description[lang] }}</i>
    </div>
    <div class="button--container">
      <button class="bg-gray-400 bg-opacity-50 text-black shadow-md dark:bg-black dark:bg-opacity-50 dark:text-gray-400 transition hover:bg-gray-200 hover:text-black dark:hover:bg-gray-400 p-4 rounded-xl dark:hover:text-black md:mx-4" type="button" @click="$emit('sessionHide')">
        {{ formData.labels.buttons.close[lang] }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  emits: ['hideModal'],
  props: ['formData', 'lang'],
}
</script>

<style scoped>

</style>