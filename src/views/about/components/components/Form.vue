<template>
  <div class="form--container">
    <iframe id="hidden_frame"></iframe>
    <form ref="form" :action="formData.action" method="POST" target="hidden_frame">
      <div>
        <h1>{{ formData.labels.contact[lang] }}</h1>
      </div>
      <div>
        <label for="name">{{ formData.labels.name[lang] }}<span>&nbsp;*</span>
          <transition name="fade">
              <span v-show="name.length===0&&clicked">
                <i>
                  {{ formData.labels.validations.name[lang] }}
                </i>
              </span>
          </transition>
        </label>
        <input type="text" :placeholder="formData.labels.name[lang]" id='name' autocomplete="off"
               class="form--input" v-model="name" maxlength="191">
      </div>
      <div>
        <label for="email">Email<span>&nbsp;*</span>
          <transition name="fade">
              <span v-show="email.length===0&&clicked">
                <i>
                  {{ formData.labels.validations.email[lang] }}
                </i>
                </span>
          </transition>
        </label>
        <input type="email" placeholder="Email" id="email" autocomplete="off" class="form--input" v-model="email"
               maxlength="191">
      </div>
      <div>
        <label for="message" class="hidden md:block">{{ formData.labels.message[lang] }}</label>
        <textarea :placeholder="messagePlaceholder" id="message" rows="3" v-model="message"
                  class="form--input" maxlength="500"></textarea>
      </div>
      <div class="button--container">
        <button class="background hover--effect" type="button" @click="hideModal">
          {{ formData.labels.buttons.cancel[lang] }}
        </button>
        <button class="background hover--effect md:mx-4" type="button" @click="sessionHide">
          {{ formData.labels.buttons.hide[lang] }}
        </button>
        <button :class="['inverted-background', submitButtonClass]" type="button" @click="validate">
          {{ formData.labels.buttons.submit[lang] }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form.vue",
  emits: ['hideModal'],
  props: ['formData', 'lang', 'formSubmission'],
  data() {
    return {
      name: '',
      email: '',
      message: '',
      clicked: 0,
    }
  },
  methods: {
    initializeInputNames: function () {
      for (let key in this.formData.inputs) {
        let element = this.$refs.form.querySelector(`#${key}`);
        element.setAttribute('name', this.formData.inputs[key]);
      }
    },
    sessionHide: function (e) {
      e.stopPropagation();
      this.$emit('sessionHide');
    },
    validate: function () {
      this.clicked = 1;
      if (this.$refs.form.reportValidity() && this.name.length && this.email.length) {
        this.$refs.form.submit();
        this.$emit('formSubmission');
      }
    },
    hideModal: function (e) {
      e.stopPropagation();
      this.$emit('hideModal');
    }
  },
  mounted: function () {
    this.initializeInputNames();
  },
  computed: {
    messagePlaceholder: function () {
      return this.message.length === 0 && this.clicked ? this.formData.labels.validations.message[this.lang] : this.formData.labels.message[this.lang];
    },
    submitButtonClass: function () {
      return this.email.length && this.name.length ? 'animate-pulse' : '';
    }
  },
}
</script>
