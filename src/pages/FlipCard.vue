<template>
  <div>
    <section class="game-board">
      <!-- 21 min   Bencodezen    -->
      <Card
        v-for="(card, index) in cardList"
        :key="`card-${index}`"
        :value="card.value"
        :matched="card.matched"
        :visible="card.visible"
        @select-card="flipCard"
        :position="card.position"
      />

      <!-- <h2>{{ status }}</h2> -->
      <p>Remaining cards Pair : {{ remainingPairs }}</p>
      <button @click="restartGame" class="cursor-pointer">Restart Game</button>
    </section>
  </div>
</template>
<script setup>
import _ from "lodash";
import { ref, watch, computed } from "vue";
import Card from "../components/CardCom.vue";
const cardList = ref([]);
const userSelection = ref([]);
const cardItems = ref([1, 2, 3, 4, 5, 6, 7, 8]);

cardItems.value.forEach((item) => {
  cardList.value.push({
    value: item,
    position: null,
    visible: false,
    matched: false,
  });

  cardList.value.push({
    value: item,
    position: null,
    visible: false,
    matched: false,
  });
});

// for (let i = 0; i < 16; i++) {
//   cardList.value.push({
//     value: 8,
//     position: i,
//     visible: false,
//     matched: false,
//   });
// }
cardList.value = cardList.value.map((card, index) => {
  return {
    ...card,
    matched: false,
    visible: false,
    position: index,
  };
});
const shuffleCards = () => {
  cardList.value = _.shuffle(cardList.value);
};
const restartGame = () => {
  shuffleCards();

  cardList.value = cardList.value.map((card, index) => {
    return {
      ...card,
      matched: false,
      visible: false,
      position: index,
    };
  });
};
const status = computed(() => {
  if (remainingPairs.value === 0) {
    return "Player win !";
  } else {
    return `Remaining Pairs : ${remainingPairs.value}`;
  }
});
const remainingPairs = computed(() => {
  const remainingCards = cardList.value.filter(
    (card) => card.matched === false
  ).length;

  return remainingCards / 2;
});
const flipCard = (payload) => {
  cardList.value[payload.position].visible = true;

  if (userSelection.value[0]) {
    if (
      userSelection.value[0].position === payload.position &&
      userSelection.value[0].faceValue === payload.faceValue
    ) {
      return;
    } else {
      userSelection.value[0] = payload;
    }
    userSelection.value[1] = payload;
  } else {
    userSelection.value[0] = payload;
  }
};

watch(
  userSelection,
  (currVal) => {
    if (currVal.length === 2) {
      const cardOne = currVal[0];
      const cardTwo = currVal[1];

      if (cardOne.faceValue === cardTwo.faceValue) {
      } else {
        setTimeout(() => {
          cardList.value[cardOne.position].visible = true;
          cardList.value[cardTwo.position].visible = true;
        }, 2000);
      }

      userSelection.value.length === 0;
    }
  },
  { deep: true }
);
</script>
<style scoped>
.game-board {
  /* padding: 30px;
  margin: 30px; */
  margin-top: 20vh;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
}
</style>
