<template>
  <div class="w-full">
    <CarouselComp
      :items="items4"
      :slidesToShow="1"
      css="mx-auto w-[65vw] !h-auto"
    />

    <br />
    <CarouselComp :items="items4" :slidesToShow="2" css="w-[65vw] !h-auto" />

    <br />
    <CarouselComp
      :items="items4"
      :slidesToShow="1"
      css="mx-auto max-w-[40vw] !h-auto"
    />

    <br />
    <CarouselComp
      :items="items2"
      :slidesToShow="1"
      css="max-w-[40vw] !h-auto"
    />
    <br />
    <CarouselComp
      :items="items2"
      :slidesToShow="3"
      css="max-w-[65vw] !h-auto"
      hideCenterBtn
    />
    <CarouselComp
      :items="items2"
      :slidesToShow="3"
      css="max-w-[65vw] !h-auto mt-4"
      hideCenterBtn
      btnClasses="top-0 left-0 justify-between flex  w-full mt-4 "
    />

    <br />
    <CarouselComp
      :items="items2"
      :slidesToShow="3"
      css="max-w-[65vw] !h-auto mt-4"
      hideCenterBtn
      btnClasses="bottom-0 left-0 justify-center flex  w-full mt-4 "
    >
      <template #leftBtn>
        <div class="px-2 rounded text-white bg-slate-600 mx-2 py-1">Prev</div>
      </template>
      <template #rightBtn>
        <div class="px-2 rounded text-white bg-slate-600 mx-2 py-1">Next</div>
      </template>
    </CarouselComp>

    <br />
    <CarouselComp :items="items3" css="!h-auto max-w-[65vw]" :slidesToShow="3">
      <template #card="{ item, index }">
        <div class="text-center mx-auto">
          <img
            :src="item.avatar.src"
            :alt="item.name"
            class="rounded-full w-48 h-48 mb-2 mx-auto"
            draggable="false"
          />
        </div>
        <p class="font-semibold text-center my-4">
          {{ index + 1 }}. {{ item.name }}
        </p>
        <div class="text-blue-500 underline cursor-pointer text-center">
          View Profile
        </div>
      </template>
    </CarouselComp>
    <div class="mt-16"></div>
  </div>
</template>
<script setup>
import CarouselComp from "../components/CarouselComp.vue";
const items3 = [
  {
    name: "Sébastien Chopin",
    to: "https://github.com/Atinux",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
  },
  {
    name: "Pooya Parsa",
    to: "https://github.com/pi0",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
  },
  {
    name: "Daniel Roe",
    to: "https://github.com/danielroe",
    avatar: {
      src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe",
    },
  },
  {
    name: "Anthony Fu",
    to: "https://github.com/antfu",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
  },
];
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
const items4 = [
  {
    src: "https://picsum.photos/1920/1080?random=1",
  },
  {
    src: "https://picsum.photos/1920/1080?random=2",
  },
  {
    src: "https://picsum.photos/1920/1080?random=3",
  },
  {
    src: "https://picsum.photos/1920/1080?random=4",
  },
  {
    src: "https://picsum.photos/1920/1080?random=5",
  },
  {
    src: "https://picsum.photos/1920/1080?random=6",
  },
];
const items2 = [
  {
    name: "Sébastien Chopin",
    to: "https://github.com/Atinux",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux" },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum voluptatem beatae laborum adipisci dolore minus ab obcaecati quae repellendus fuga, tempora molestias, hic commodi vero voluptatibus dolores laboriosam saepe.",
  },
  {
    name: "Pooya Parsa",
    to: "https://github.com/pi0",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum voluptatem beatae laborum adipisci dolore minus ab obcaecati quae repellendus fuga, tempora molestias, hic commodi vero voluptatibus dolores laboriosam saepe.",
  },
  {
    name: "Daniel Roe",
    to: "https://github.com/danielroe",
    avatar: {
      src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/danielroe",
    },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum voluptatem beatae laborum adipisci dolore minus ab obcaecati quae repellendus fuga, tempora molestias, hic commodi vero voluptatibus dolores laboriosam saepe.",
  },
  {
    name: "Anthony Fu",
    to: "https://github.com/antfu",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/antfu" },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum voluptatem beatae laborum adipisci dolore minus ab obcaecati quae repellendus fuga, tempora molestias, hic commodi vero voluptatibus dolores laboriosam saepe.",
  },
  {
    name: "Pooya Parsa",
    to: "https://github.com/pi0",
    avatar: { src: "https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/pi0" },
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum voluptatem beatae laborum adipisci dolore minus ab obcaecati quae repellendus fuga, tempora molestias, hic commodi vero voluptatibus dolores laboriosam saepe.",
  },
];
</script>
