<template>
  <div class="">
    <div class="flex justify-center text-lg gap-2 my-4">
      <span
        class="my-auto bg-slate-200 text-gray-800 font-medium px-2.5 py-0.5 rounded"
        >Total number of Task - {{ totalTask }}</span
      >
      <span
        class="my-auto bg-slate-200 text-gray-800 font-medium px-2.5 py-0.5 rounded"
        >Total number of completed Task - {{ completedTask }}</span
      >
      <span
        class="my-auto bg-slate-200 text-gray-800 font-medium px-2.5 py-0.5 rounded"
        >Total number of uncompleted Task - {{ uncompletedTask }}</span
      >
    </div>

    <div class="p-6 rounded w-1/2 h-auto my-auto mx-auto bg-slate-900">
      <h1 class="text-lg font-semibold mb-3 text-white">TO DO LIST</h1>
      <div
        class="add-task flex flex-nowrap gap-2 text-base text-white my-2 mb-4"
      >
        <input
          type="text"
          autocomplete="off"
          placeholder="Add New Todo"
          v-model="addnewtask"
          @keyup.enter="newItem"
          class="bg-transparent text-white w-full p-2 border-b-2 border-white"
        />
        <i
          class="fa-solid fa-pen mt-2 cursor-pointer"
          @click="onUpdate"
          v-if="isEditing"
        >
          <q-tooltip>Update Task</q-tooltip>
        </i>
        <i
          class="fa-solid fa-circle-plus text-xl mt-2 text-green-500 cursor-pointer"
          @click="newItem"
          v-if="!isEditing"
        >
          <q-tooltip>Add New Task</q-tooltip>
        </i>
      </div>
      <ul class="task-list">
        <li
          class="flex flex-nowrap gap-2 p-2 mb-3 text-center text-white bg-slate-800 rounded"
          v-for="(task, index) in tasks"
          :key="task.id"
        >
          <label class="flex flex-nowrap my-auto">
            <input
              type="checkbox"
              v-model="task.checked"
              class="mx-2 mb-auto mt-1 cursor-pointer"
              :class="{ 'bg-green-500': task.checked }"
            />
            <span :class="{ 'line-through': task.checked }"
              >{{ task.name }} {{ index }}
            </span>
          </label>
          <span class="ml-auto cursor-pointer">
            <i class="fa-solid fa-eye mx-2" @click="editItem(task)">
              <q-tooltip>Edit Task</q-tooltip>
            </i>
            <i
              class="fa-solid fa-trash-can text-lg text-red-500"
              @click="delItem(index)"
            >
              <q-tooltip>Delete Task</q-tooltip>
            </i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const addnewtask = ref("");
const id = ref(5);
const editingTask = ref(null); // The task being edited
const isEditing = ref(false);
const tasks = ref([
  { name: "Start a new pen", id: 0, checked: false },
  { name: "Read a book", id: 1, checked: false },
  { name: "Meeting with team", id: 2, checked: false },
]);

const newItem = () => {
  if (addnewtask.value) {
    tasks.value.push({ name: addnewtask.value, id: id.value });
    id.value++; // Increment id for the next task
  }
  addnewtask.value = "";
};

const editItem = (item) => {
  addnewtask.value = item.name;
  id.value = item.id;
  isEditing.value = true;
  editingTask.value = item;
};

const onUpdate = () => {
  if (isEditing.value && addnewtask.value) {
    // Find the task by its ID and update it
    const updatedTaskIndex = tasks.value.findIndex(
      (task) => task.id === editingTask.value.id
    );
    if (updatedTaskIndex !== -1) {
      tasks.value[updatedTaskIndex].name = addnewtask.value;
    }
    isEditing.value = false; // Turn off editing mode
    addnewtask.value = ""; // Clear the input field
  }
};

const delItem = (index) => {
  tasks.value.splice(index, 1);
};

const totalTask = computed(() => {
  return tasks.value.length;
});

const completedTask = computed(() => {
  return tasks.value.filter((x) => x.checked === true).length;
});

const uncompletedTask = computed(() => {
  return totalTask.value - completedTask.value;
});
</script>
