<template>
  <div
    class="dashboard w-full max-w-6xl h-full flex flex-col items-center justify-start flex-wrap p-8 rounded-2xl ring-1 drop-shadow-4xl bg-slate-900 text-slate-200 ring-blue-300/20 overflow-auto"
  >
    <div class="relative flex w-full h-[220px] gap-16 justify-center">
      <div class="flex flex-1 gap-4">
        <Card :data="data[0]" color="green" />
        <Card :data="data[1]" color="green" />
      </div>
      <div class="flex flex-1 gap-4">
        <Card :data="data[2]" color="red" />
        <Card :data="data[3]" color="red" />
      </div>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 m-auto w-0 h-full border border-zinc-700/70"
      ></div>
    </div>
    <div class="relative flex items-center justify-center py-5 w-full">
      <button
        class="w-1/4 bg-slate-700 rounded-s-xl px-6 py-2 border-r border-slate-500 hover:bg-blue-200 hover:text-blue-700 font-semibold"
        :class="isUp ? 'bg-blue-200 text-blue-700' : ''"
        @click="setIsUp(true)"
      >
        BULL
      </button>
      <button
        class="w-1/4 bg-slate-700 rounded-e-xl px-6 py-2 border-l border-slate-500 hover:bg-yellow-200 hover:text-yellow-700 font-semibold"
        :class="isUp === false ? 'bg-yellow-200 text-yellow-700' : ''"
        @click="setIsUp(false)"
      >
        BEAR
      </button>
      <div
        v-if="isUp !== undefined"
        class="absolute right-2 flex items-center justify-center"
      >
        <vue-feather
          type="check"
          size="20"
          @click="nextSet"
          class="cursor-pointer hover:bg-slate-800/70 rounded-full p-2"
        ></vue-feather>
        <vue-feather
          type="x"
          size="20"
          @click="isUp = undefined"
          class="cursor-pointer hover:bg-red-800/70 rounded-full p-2"
        ></vue-feather>
      </div>
    </div>
    <div
      v-if="data2"
      class="relative flex w-full h-[220px] gap-16 justify-center"
    >
      <div class="flex flex-1 gap-4">
        <Card :data="data2[0]" color="green" />
        <Card :data="data2[1]" color="green" />
      </div>
      <div class="flex flex-1 gap-4">
        <Card :data="data2[2]" color="red" />
        <Card :data="data2[3]" color="red" />
      </div>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 m-auto w-0 h-full border border-zinc-700/70"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Card from "./Card.vue";

export default {
  name: "Dashboard",
  components: { Card },
  setup() {
    const isUp = ref();
    const data = ref([
      { name: "Sayanth", loss: 0 },
      { name: "Fury Augesto", loss: 0 },
      { name: "Benson", loss: 2 },
      { name: "Ashif", loss: 1 },
    ]);
    const data2 = ref();
    return {
      data,
      data2,
      isUp,
    };
  },
  computed: {},
  methods: {
    setIsUp(b) {
      this.isUp = b;
    },
    nextSet() {
      console.log("nextSet");

      this.data2 = [
        this.isUp ? this.data[0] : this.data[2],
        null,
        this.isUp ? this.data[1] : this.data[3],
        null,
      ];
    },
  },
};
</script>

<style scoped></style>
