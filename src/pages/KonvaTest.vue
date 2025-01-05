<template>
  <div ref="scrollContainer" class="scroll-container" @scroll="onScroll">
    <div
      class="large-container"
      :style="{
        width: canvasWidth + 'px',
        height: canvasHeight + 'px',
        'margin-left': leftMargin + 'px',
      }"
    >
      <v-stage ref="stage" :config="stageSize">
        <v-layer>
          <v-image :config="imageConfig" :image="invoiceImage"> </v-image>
          <v-rect
            :config="{
              x: 300,
              y: 320,
              width: 150,
              height: 50,
              stroke: 'red',
              strokeWidth: 2,
              cornerRadius: 5,
            }"
          />
        </v-layer>
      </v-stage>
    </div>
    <!-- SECTION - 2 FOR SELECTING KEYS AND VALUES FROM INVOICES -->
    <section>
      <v-stage
        ref="stage"
        :config="stageSize"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @touchstart="onMouseUp"
      >
        <v-layer>
          <v-image :config="imageConfig" :image="invoiceImage"> </v-image>
          <v-rect
            :config="{
              x: 298,
              y: 424,
              width: 157,
              height: 66,
              stroke: 'blue',
              strokeWidth: 1,
              cornerRadius: 5,
            }"
          />
          <v-rect v-if="selectionRect" :config="selectionRectConfig" />
        </v-layer>
      </v-stage>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const stageSize = ref({
  width: width.value,
  height: height.value,
});
const isSelecting = ref(false);
const selectionRect = ref(null);
const startPoint = ref({ x: 0, y: 0 });
const selectionRectConfig = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  stroke: "blue",
  strokeWidth: 2,
});
const setConfig = ref({
  x: 20,
  y: 50,
  width: 100,
  height: 100,
  stroke: "red",
  shadowBlur: 10,
});

const invoiceImage = ref(null);

const newRectConfig = ref({});
const imageConfig = ref({
  // image:invoiceImage.value,
  x: 300,
  y: 200,
  width: 600,
  height: 1000,
});
const onChangeRecConfig = () => {
  newRectConfig.value = {
    x: 400,
    y: 80,
    width: 100,
    height: 100,
    stroke: "green",
    fill: "blue",
    strokeWidth: 2,
    shadowBlur: 1,
  };
};

const onMouseDown = (e) => {
  isSelecting.value = true;
  const pos = e.target.getStage().getPointerPosition();
  startPoint.value = pos;
  selectionRect.value = { ...pos, width: 0, height: 0 };
};

const onMouseMove = (e) => {
  if (!isSelecting.value) return;
  const pos = e.target.getStage().getPointerPosition();

  selectionRectConfig.value.x = Math.min(startPoint.value.x, pos.x);
  selectionRectConfig.value.y = Math.min(startPoint.value.y, pos.y);
  selectionRectConfig.value.width = Math.abs(pos.x - startPoint.value.x);
  selectionRectConfig.value.height = Math.abs(pos.y - startPoint.value.y);
};

const onMouseUp = () => {
  // e.evt.preventDefault()
  isSelecting.value = false;
  if (selectionRectConfig.value.width && selectionRectConfig.value.height) {
    console.log("Selected Area:", {
      x: selectionRectConfig.value.x,
      y: selectionRectConfig.value.y,
      width: selectionRectConfig.value.width,
      height: selectionRectConfig.value.height,
    });
  }
  selectionRect.value = null;
};

onMounted(() => {
  const img = new Image();
  img.src =
    "https://assets-global.website-files.com/6253f6e60f27498e7d4a1e46/6271a424c9f168399794e4f3_Example-Invoice-Template-1-G.jpeg";
  img.onload = () => {
    invoiceImage.value = img;
  };
});
</script>
<style scoped>
.scroll-container {
  overflow: auto;
}
.large-container {
  overflow: hidden;
  position: relative;
}
.highlighted-node {
  position: absolute;
}
</style>
