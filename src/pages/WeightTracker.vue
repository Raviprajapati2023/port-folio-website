<template>
  <div class="p-12 w-5/12 mx-auto bg-slate-50 rounded h-full">
    <h1 class="text-xl mt-8 font-semibold my-4 text-center">
      Weight Tracker App
    </h1>
    <div class="current">
      <span
        class="h-32 w-32 text-center bg-white p-2 mx-auto rounded-full flex my-4 p-2"
      >
        <span>
          <h2 class="text-lg p-2 font-semibold">Current Weight :</h2>
          <div class="text-indigo-500 font-semibold">
            {{ currentWeight.weight }}
            <small>Kg</small>
          </div>
        </span>
      </span>

      <small>Current Weight (kg)</small>
      <q-form @submit.prevent="addWeight">
        <div class="flex flex-nowrap gap-2 w-full">
          <input
            type="number"
            step="0.1"
            v-model="weightInput"
            class="border border-2 p-2 w-full"
            placeholder="Add current weight"
          />
          <q-btn
            type="submit"
            label="Add Weight"
            class="bg-green-500 text-white"
          />
        </div>
      </q-form>
      <div v-if="weights && weights.length > 0">
        <h2>Last 7 days</h2>

        <div class="canvas-box">
          <canvas ref="weightChartEl"> </canvas>
        </div>
        <div class="weight-history">
          <h2>Weight History</h2>

          <ul>
            <li
              v-for="weight in weights"
              :key="weight"
              class="text-base my-2 list-disc"
            >
              <span>{{ weight.weight }} kg </span>
              <small> {{ new Date(weight.date).toLocaleDateString() }} </small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, shallowRef } from "vue";
import { Chart } from "chart.js/auto";
import { nextTick } from "vue";

// State
const weights = ref([{ weight: "" }]);
const weightInput = ref(65.0);

// Chart
const weightChartEl = ref(null);
const weightChart = shallowRef(null);

// Computed Property
const sortedWeights = computed(() => {
  return weights.value.slice().sort((a, b) => b.date - a.date);
});

const currentWeight = computed(() => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return sortedWeights.value[1] || { weight: 65 };
});

const addWeight = () => {
  if (weightInput.value) {
    weights.value.push({
      weight: weightInput.value,
      date: new Date().getTime(),
    });
    weightInput.value = "";
  }
};

watch(
  weights,
  (newWeights) => {
    const ws = [...newWeights];

    if (weightChart.value) {
      weightChart.value.data.labels = ws
        .sort((a, b) => a.date - b.date)
        .map((w) => new Date(w.date).toLocaleDateString())
        .slice(-7);

      weightChart.value.data.datasets[0].data = ws
        .sort((a, b) => a.date - b.date)
        .map((w) => w.weight)
        .slice(-7);

      weightChart.value.update();
    }

    nextTick(() => {
      weightChart.value = new Chart(weightChartEl.value.getContext("2d"), {
        type: "line",
        data: {
          labels: ws
            .sort((a, b) => a.date - b.date)
            .map((w) => new Date(w.date).toLocaleDateString()),
          datasets: [
            {
              label: "Weight",
              data: ws.sort((a, b) => a.date - b.date).map((w) => w.weight),
              backgroundColor: "rgba(255,105,180,0.2)",
              borderColor: "rgb(255,105,180)",
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
  },
  { deep: true }
);
</script>
