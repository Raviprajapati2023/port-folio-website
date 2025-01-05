<template>
  <div class="parentDiv">
    <h2>Quiz App</h2>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">
          {{ getCurrentQuestion.question }}
        </span>
        <span class="score">Score : {{ score }}/{{ questions.length }}</span>
      </div>
      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <span class="indexinput"> {{ index }}</span>
          <input
            type="radio"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="setAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>
      <button @click="nextQuestion" :disabled="!getCurrentQuestion.selected">
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an Option"
            : "Next Question"
        }}
      </button>
    </section>
    <section v-else>
      <h3>You have finish the quiz !</h3>
      <p>Your score is {{ score }} / {{ questions.length }}</p>
      <button @click="resetQuiz">Reset</button>
    </section>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const questions = ref([
  {
    question: "What is vue js  ?",
    answer: 0,
    options: ["A front end frame work.", "A library", "Cake maker"],
    selected: null,
  },
  {
    question: "What is Pinia  ?",
    answer: 1,
    options: ["A front end frame work.", "An State management ", "roti maker"],
    selected: null,
  },
  {
    question: "What is vue router used for  ?",
    answer: 0,
    options: ["Walk in space.", "An State management ", "roti maker"],
    selected: null,
  },
  {
    question: "What is filter ?",
    answer: 1,
    options: ["A front end frame work.", "A function", "Cake maker"],
    selected: null,
  },
]);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected == q.answer) {
      value++;
    }
  });
  return value;
});

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;

  return question;
});

const setAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};

const nextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
};

const resetQuiz = () => {
  questions.value.forEach((q) => {
    q.selected = null;
  });
  currentQuestion.value = 0;
  quizCompleted.value = false;
};
</script>
<style scoped>
.indexinput {
  opacity: 0;
}
.parentDiv {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  min-height: 100vh;
}
h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  min-width: 640px;
  color: white;
  border-radius: 0.5rem;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.quiz-info .question {
  font-size: 1.25rem;
  color: #8f8f8f;
}

.quiz-info .score {
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}
.option {
  padding: 1rem;
  display: block;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.option:hover {
  background-color: #2d213f;
}
.option.correct {
  background-color: #2cce7d;
}
.option.wrong {
  background-color: #ff5a5f;
}
.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}
button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
button:disabled {
  opacity: 0.5;
}
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}
</style>
