<template>
  <div class="p-8">
    <section>
      <h3 class="text-xl text-indigo-400">Overview</h3>
      <div class="rounded-xl shadow-lg mt-8 p-5">
        <div class="my-2">
          <dl
            class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Total Monthly Income
              </dt>
              <dd class="text-xs font-medium text-gray-700">+100%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
              >
                $ {{ rows.income }}
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Total Spent
              </dt>
              <dd class="text-xs font-medium text-rose-600">-25%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
              >
                $12,420
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Money Saved
              </dt>
              <dd class="text-xs font-medium text-gray-700">+75%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
              >
                $37,580
              </dd>
            </div>
          </dl>
        </div>

        <hr />
      </div>
    </section>
    <section>
      <q-card class="p-2 my-2">
        <q-form @submit="addExpense">
          <div class="flex gap-2 flex-nowrap">
            <q-input
              outlined
              placeholder="Enter Expense Name"
              dense
              class="my-2 w-full"
              v-model="form.expenseName"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              outlined
              placeholder="Date"
              type="date"
              dense
              class="my-2 w-full"
              v-model="form.date"
            />
            <q-input
              outlined
              placeholder="Enter Amount"
              type="number"
              dense
              class="my-2 w-full"
              v-model="form.amount"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-select
              :options="['Card', 'Cash', 'UPI', 'Other']"
              outlined
              label="Select Payment Method"
              dense
              class="my-2 w-full"
              v-model="form.expenseType"
            />
          </div>
          <div class="text-center my-2">
            <q-btn color="primary" label="Add Expense" outline type="submit" />
          </div>
        </q-form>
      </q-card>
    </section>
    <section>
      <div>
        <q-table
          title="Expenses"
          :rows="rows.expense"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-action="props">
            <q-td :props="props">
              <i
                class="fa-solid fa-trash-can text-red-500 cursor-pointer"
                @click="deleteExpense(props.row)"
              ></i>
            </q-td>
          </template>
        </q-table>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
const form = ref({
  expenseType: "",
  expenseName: "",
  amount: "",
  date: "",
});

const addExpense = () => {
  if (form.value.expenseName && form.value.amount > 0) {
    rows.value.expense.push(form.value);
  }
  form.value = {};
};
const deleteExpense = (item) => {
  const index = rows.value.expense.indexOf(item);
  if (index !== -1) {
    rows.value.expense.splice(index, 1);
  }
};
const columns = ref([
  {
    name: "expenseType",
    required: true,
    label: "Expense Type",
    align: "left",
    field: (row) => row.expenseType,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "expenseName",
    align: "center",
    label: "Expense Name",
    field: "expenseName",
    sortable: true,
  },
  { name: "date", label: "Date", field: "date", sortable: true },
  { name: "amount", label: "Amount", field: "amount" },
  { name: "action", label: "Action", field: "action", align: "center" },
]);

const rows = ref({
  income: 50000,
  expense: [
    {
      expenseType: "Cash",
      expenseName: "Travelling",
      date: "2023-08-28",
      amount: 750,
    },
    {
      expenseType: "Card",
      expenseName: "Food",
      date: "2023-08-28",
      amount: 150,
    },
  ],
});
</script>
