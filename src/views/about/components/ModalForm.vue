<template>
  <div :class="['modal', (showForm&&(rememberedOption===0))?'active':'invisible']" ref="default" @click="exitHandle"
       @keydown="keydownHandler">
    <transition name="fade" mode="out-in">
      <component :is="component" :form-data="formData" :lang="lang" @hideModal="hideModal" @sessionHide="sessionHide"
                 @formSubmission="thankYou"/>
    </transition>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import ThankYou from "./components/ThankYou.vue";

export default {
  name: "ModalForm",
  components: {
    Form, ThankYou,
  },
  props: ['formData', 'lang', 'showForm'],
  data() {
    return {
      component: 'Form',
      rememberedOption: sessionStorage.getItem('hidden_remember') | 0
    }
  },
  watch: {
    showForm(value) {
      setTimeout(() => {
        if (value) {
          document.querySelector("#name").focus();
        }
      }, 150)

    }
  },
  methods: {
    hideModal: function () {
      this.$refs.default.classList.remove("active");
      setTimeout(() => { //non-arrow function will receive this object as window object
        this.$refs.default.classList.add("invisible");
      }, 150) //duration-500
    },
    exitHandle: function (e) {
      if (e.target === this.$refs.default) {
        this.hideModal(e);
      }
    },
    sessionSave: function (value) {
      sessionStorage.setItem('hidden_remember', value);
      this.rememberedOption = value;
    },
    sessionHide: function () {
      this.hideModal();
      setTimeout(() => {
        this.sessionSave(1);
      }, 150);
    },
    thankYou: function () {
      this.component = 'ThankYou';
    },
    keydownHandler: function (e) {
      if (e.which === 27) {
        this.hideModal();
      }
    }
  },
}
</script>
