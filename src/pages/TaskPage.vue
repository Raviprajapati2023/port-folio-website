<template>
  <div class="w-full flex justify-center item-center">
    <div class="w-[70vw] item-center my-auto p-4 content-center">
      <div class="text-xl font-semibold mb-4">Gallary Item :</div>
      <div class="y-2 mx 12 text-center flex justify-center">
        <img :src="imgObj.url" :alt="imgObj.label" class="rounded-lg" />
        <div class="w-full text-center my-2 text-lg font-base">
          {{ imgObj.label }}
        </div>
      </div>
      <div class="text-xl font-semibold my-4">Large Page Layout :</div>

      <div class="grid grid-cols-6 mx-12 my-12 gap-2 cursor-pointer">
        <div
          class="p-1"
          v-for="(img, idx) in images"
          :key="idx"
          @click="onImgClick(img)"
        >
          <img :src="img.url" alt="" />
        </div>
      </div>
    </div>
    Dues Report - {{ filterDues }}
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const duesReportList = ref([
  {
    studentInfo: {
      studentId: "65d8cf2bd8ddea1ff1ada10a",
      name: "Raghav yadav",
      className: "1",
      classId: "6580b312f191f868710a1157",
      section: "A",
      rollNo: 69,
      batchName: "2023-2024",
      fatherName: null,
      motherName: null,
      mobile: "9898988899",
      admissionNo: 22348,
    },
    monthlyPayable: [
      {
        feeName: "TRANSPORT FEE",
        period: "Dec-2023",
        amount: 1000,
        paid: 0,
        dues: 1000,
        fine: 0,
        discount: 0,
        toPay: 1000,
      },
      {
        feeName: "TRANSPORT FEE",
        period: "Jan-2024",
        amount: 1000,
        paid: 0,
        dues: 1000,
        fine: 0,
        discount: 0,
        toPay: 1000,
      },
    ],
  },
  {
    studentInfo: {
      studentId: "65d8cecbd8ddea1ff1ada107",
      name: "Ravi pr",
      className: "1",
      classId: "6580b312f191f868710a1157",
      section: "A",
      rollNo: 66,
      batchName: "2023-2024",
      fatherName: "demo",
      motherName: null,
      mobile: "9797979788",
      admissionNo: 1112,
    },
    monthlyPayable: [
      {
        feeName: "TRANSPORT FEE",
        period: "Jan-2024",
        amount: 1000,
        paid: 0,
        dues: 1000,
        fine: 0,
        discount: 0,
        toPay: 1000,
      },
      {
        feeName: "TRANSPORT FEE",
        period: "Dec-2023",
        amount: 1000,
        paid: 0,
        dues: 1000,
        fine: 0,
        discount: 0,
        toPay: 1000,
      },
    ],
  },
]);

const isLoading = ref(true);
const images = ref(null);
const error = ref(null);
const imgObj = ref({
  url: "https://assets-test.fast-thinking.co.uk/fast-thinking/thmb/7c813380-fa6b-4286-8836-af2ff2d1da1d.png",
  label: "Lorem ipsum",
});
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://s3.eu-west-2.amazonaws.com/assets-test.fast-thinking.co.uk/recruitment/data.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    images.value = responseData;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const onImgClick = (img) => {
  imgObj.value = img;
};

const filterDues = computed(() => {
  return duesReportList.value.reduce((total, duesReport) => {
    duesReport.monthlyPayable.forEach((monthlyPayable) => {
      total += monthlyPayable.dues;
    });
    return total;
  }, 0);
});
onMounted(() => {
  fetchData();
});
</script>
