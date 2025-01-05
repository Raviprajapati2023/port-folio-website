<template>
  <div class="relative">
    <div class="py-12">
      <div
        class="carousel-container relative overflow-hidden mx-8"
        :class="[width, height, css]"
        ref="carouselContainer"
      >
        <div
          class="carousel-slides flex transition-transform duration-300"
          :style="{
            transform: `translateX(-${currentSlide * slideWidth}px)`,
            width: `${carouselWidth}px`,
          }"
        >
          <template v-for="(item, index) in items" :key="index">
            <div
              class="carousel-slide flex-shrink-0"
              :style="{ width: `${slideWidth}px` }"
            >
              <div v-if="isImageItem(item)">
                <img :src="item.src" class="w-full h-full object-cover px-2" />
              </div>
              <div v-else>
                <slot name="card" :item="item" :index="index">
                  <div
                    class="text-center p-4 rounded-lg shadow-md mx-2 bg-green-500"
                    :class="[cardHeight, cardWidth]"
                  >
                    <template v-if="item.avatar?.src">
                      <img
                        :src="item.avatar.src"
                        :alt="item.name"
                        class="rounded-full mx-auto mb-2 w-16 h-16"
                        draggable="false"
                      />
                    </template>
                    <p class="font-semibold">{{ item.name }}</p>
                    <p class="font-semibold">{{ item.desc }}</p>
                  </div>
                </slot>
              </div>
            </div>
          </template>
        </div>
        <button
          v-if="!hideCenterBtn"
          class="bg-slate-700 text-white w-10 h-10 p-2 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
          @click="prevSlide"
          type="button"
          :disabled="disablePrev"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          v-if="!hideCenterBtn"
          class="bg-slate-700 text-white w-10 h-10 p-2 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
          @click="nextSlide"
          :disabled="disableNext"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <div
      class="absolute flex gap-x-2"
      :class="[btnClasses]"
      v-if="hideCenterBtn"
    >
      <button
        @click="prevSlide"
        type="button"
        :class="{
          'bg-slate-700 text-white w-10 h-10 p-2 rounded-full z-10':
            !$slots.leftBtn,
        }"
        :disabled="disablePrev"
      >
        <slot name="leftBtn">
          <i class="fas fa-chevron-left"></i>
        </slot>
      </button>
      <button
        :class="{
          'bg-slate-700 text-white w-10 h-10 p-2 rounded-full z-10':
            !$slots.rightBtn,
        }"
        @click="nextSlide"
        :disabled="disableNext"
      >
        <slot name="rightBtn">
          <i class="fas fa-chevron-right"></i>
        </slot>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
const props = defineProps({
  items: { type: Array, required: true, default: () => [] },
  width: { type: String, default: "w-[80vw]" },
  height: { type: String, default: "h-auto" },
  css: { type: String, default: "" },
  cardHeight: { type: String, default: "h-full" },
  cardWidth: { type: String, default: "w-auto" },
  slidesToShow: { type: Number, default: 3 },
  btnClasses: { type: String, default: "bottom-0 right-0" },
  hideCenterBtn: { type: Boolean },
});

const carouselContainer = ref(null);
const slideWidth = ref(0);
const carouselWidth = ref(0);
const currentSlide = ref(0);

const updateSlideWidth = () => {
  if (carouselContainer.value) {
    const containerWidth = carouselContainer.value.clientWidth;
    slideWidth.value = containerWidth / props.slidesToShow;
    carouselWidth.value = slideWidth.value * props.items.length;
  }
};

const disableNext = computed(() => {
  //     const totalSlides = Math.ceil(props.items.length / props.slidesToShow);
  const totalSlides = props.items.length - props.slidesToShow;
  return currentSlide.value >= totalSlides;
});

const disablePrev = computed(() => {
  return currentSlide.value === 0;
});

const nextSlide = () => {
  if (!disableNext.value) {
    currentSlide.value += 1;
  }
};

const prevSlide = () => {
  if (!disablePrev.value) {
    currentSlide.value -= 1;
  }
};

const isImageItem = (item) => {
  return item.src !== undefined;
};

onMounted(() => {
  // setTimeout(() => {
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);
  nextTick(() => updateSlideWidth());
  // }, 700);
});
</script>
<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
