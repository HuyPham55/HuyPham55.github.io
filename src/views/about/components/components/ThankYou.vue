<template>
  <div class="form--container">
    <div>
      <h1>{{ formData.labels.thank_you.title[lang] }}</h1>
    </div>
    <div class="text-center">
      <i>{{ formData.labels.thank_you.description[lang] }}</i>
    </div>
    <div class="button--container">
      <button class="background hover--effect md:mx-4" type="button" @click="$emit('sessionHide')">
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