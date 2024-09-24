<template>
  <h1 class="">
    <span ref="default">0</span>
    <span v-if="suffix&&localCountTo">{{ suffix }}</span>
  </h1>
</template>

<script>
import {defineComponent} from "vue";
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function delay(callback, ms) {
  let timer = 0;
  return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

export default defineComponent({
  name: "CountUp",
  props: {
    countTo: {
      default: 0,
      required: true,
    },
    suffix: {
      type: null,
      default: null,
    }
  },
  data() {
    return {
      localCountTo: this.countTo || 0,
      counted: false,
    }
  },
  methods: {
    easingFunction: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    animateCountUp: function (animationDuration = 2500) {
      let el = this.$refs.default;
      let frame = 0;
      const frameDuration = 1000 / 60;
      const countTo = parseInt(this.countTo, 10);
      const totalFrames = Math.round(animationDuration / frameDuration);
      const counter = setInterval(() => {
        frame++;
        const progress = this.easingFunction(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = currentCount;
        }
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    },

    handler: function () {
      if (this.counted !== true) {
        if (isInViewport(this.$refs.default)) {
          this.animateCountUp();
          this.counted = true;
        }
      }
    },

    initialize: function () {
      this.handler();
    },

    listenToScroll: function () {
      let scroller = document.querySelector(".simplebar-content-wrapper");
      scroller.addEventListener("scroll", delay(() => {
        this.handler();
      }, 250), {passive: true})
    }
  },
  mounted: function () {
    this.initialize();
    this.listenToScroll();
  },
})
</script>

<style scoped>

</style>