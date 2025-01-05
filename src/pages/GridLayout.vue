<template>
  <div class="layout-json">
    Displayed as <code>[x, y, w, h]</code>:
    <div class="columns">
      <div v-for="item in layout" :key="item.i" class="layout-item">
        <b>{{ item.i }}</b
        >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
      </div>
    </div>
  </div>
  <br />
  <div class="flex gap-2">
    <div
      draggable="true"
      unselectable="on"
      @drag="drag(file)"
      @dragend="dragEnd(file)"
      v-for="(file, index) in jsonFile"
      :key="index"
    >
      <div class="droppable-element">
        {{ file.name }}
      </div>
    </div>
  </div>

  <div ref="wrapper">
    <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30">
      <template #item="{ item }">
        <span class="text">
          <div>{{ item.i }}</div>
          <div>{{ item.description }}</div>
        </span>
      </template>
    </GridLayout>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
// you can import from 'lodash-es' or implement it by yourself
import { throttle } from "@vexip-ui/utils";

import { GridLayout } from "grid-layout-plus";

const layout = ref([{ x: 0, y: 0, w: 2, h: 2, i: "0", description: "test" }]);

const wrapper = ref(null);
const gridLayout = ref(null);

onMounted(() => {
  document.addEventListener("dragover", syncMousePosition);
});

onBeforeUnmount(() => {
  document.removeEventListener("dragover", syncMousePosition);
});

const mouseAt = { x: -1, y: -1 };

const syncMousePosition = (event) => {
  mouseAt.x = event.clientX;
  mouseAt.y = event.clientY;
};

const dropId = "drop";
const dragItem = { x: -1, y: -1, w: 6, h: 6, i: "" };

const drag = throttle((file) => {
  const parentRect = wrapper.value?.getBoundingClientRect();

  if (!parentRect || !gridLayout.value) return;

  const mouseInGrid =
    mouseAt.x > parentRect.left &&
    mouseAt.x < parentRect.right &&
    mouseAt.y > parentRect.top &&
    mouseAt.y < parentRect.bottom;

  if (mouseInGrid && !layout.value.find((item) => item.i === dropId)) {
    layout.value.push({
      x: (layout.value.length * 2) % 12,
      y: layout.value.length + 12, // puts it at the bottom
      w: 6,
      h: 6,
      i: dropId,
      description: file.description,
    });
  }

  const index = layout.value.findIndex((item) => item.i === dropId);

  if (index !== -1) {
    const item = gridLayout.value.getItem(dropId);

    if (!item) return;

    try {
      item.wrapper.style.display = "none";
    } catch (e) {}

    Object.assign(item.state, {
      top: mouseAt.y - parentRect.top,
      left: mouseAt.x - parentRect.left,
    });
    const newPos = item.calcXY(
      mouseAt.y - parentRect.top,
      mouseAt.x - parentRect.left
    );

    if (mouseInGrid) {
      gridLayout.value.dragEvent(
        "dragstart",
        dropId,
        newPos.x,
        newPos.y,
        dragItem.h,
        dragItem.w
      );
      dragItem.i = String(index);
      dragItem.x = layout.value[index].x;
      dragItem.y = layout.value[index].y;
    } else {
      gridLayout.value.dragEvent(
        "dragend",
        dropId,
        newPos.x,
        newPos.y,
        dragItem.h,
        dragItem.w
      );
      layout.value = layout.value.filter((item) => item.i !== dropId);
    }
  }
});

const dragEnd = (file) => {
  const parentRect = wrapper.value?.getBoundingClientRect();

  if (!parentRect || !gridLayout.value) return;

  const mouseInGrid =
    mouseAt.x > parentRect.left &&
    mouseAt.x < parentRect.right &&
    mouseAt.y > parentRect.top &&
    mouseAt.y < parentRect.bottom;

  if (mouseInGrid) {
    alert(
      `Dropped element props:\n${JSON.stringify(
        dragItem,
        ["x", "y", "w", "h"],
        2
      )}`
    );
    gridLayout.value.dragEvent(
      "dragend",
      dropId,
      dragItem.x,
      dragItem.y,
      dragItem.h,
      dragItem.w
    );
    layout.value = layout.value.filter((item) => item.i !== dropId);
  } else {
    return;
  }

  layout.value.push({
    x: dragItem.x,
    y: dragItem.y,
    w: dragItem.w,
    h: dragItem.h,
    i: dragItem.i,
    description: file.description,
  });
  gridLayout.value.dragEvent(
    "dragend",
    dragItem.i,
    dragItem.x,
    dragItem.y,
    dragItem.h,
    dragItem.w
  );

  const item = gridLayout.value.getItem(dropId);

  if (!item) return;

  try {
    item.wrapper.style.display = "";
  } catch (e) {}
};
const jsonFile = ref([
  {
    id: 12323,
    name: "test-1",
    description: "this is about of id-1",
  },
  {
    id: 12324,
    name: "test-2",
    description: "this is about of id-2",
  },
  {
    id: 12325,
    name: "test-13",
    description: "this is about of id-3",
  },
  {
    id: 12326,
    name: "test-4",
    description: "this is about of id-4",
  },
]);
</script>

<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}

.text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
}

.layout-json {
  padding: 10px;
  margin-top: 10px;
  background-color: #ddd;
  border: 1px solid black;
}

.columns {
  columns: 120px;
}

.droppable-element {
  width: 150px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  background-color: #fdd;
  border: 1px solid black;
}
</style>
