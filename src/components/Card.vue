<template>
  <div
    class="flex flex-col flex-1 h-full justify-between rounded-3xl p-8 ring-1 xl:p-10 cursor-pointer"
    :class="
      color === 'green'
        ? 'bg-zinc-950/50 hover:bg-green-600/80 text-slate-200 ring-green-300/20'
        : 'bg-zinc-950/50 hover:bg-red-600/80 text-slate-200 ring-red-300/20'
    "
  >
    <div v-if="data">
      <div class="flex items-start justify-between gap-x-4">
        <h3 id="tier-starter" class="text-lg font-semibold">
          {{formatName(data.name)}}
        </h3>
        <p v-if="data.loss"
          class="flex gap-2 rounded-full p-2 text-xs font-semibold"
          :class="
            color === 'green'
              ? 'bg-green-600/10'
              : 'bg-red-600/10'
          "
        >
        <div v-for="l of data.loss" class='w-2 h-2 rounded-full p-1' :class="
            color === 'green'?'bg-green-600':'bg-red-600'" >
        </div>
        </p>
      </div>
      <p class="mt-6 flex items-baseline gap-x-1">
        <span class="text-2xl font-bold tracking-tight">$9.99</span>
        <span
          class="text-sm font-semibold leading-6"
          :class="color === 'green' ? 'text-green-400' : 'text-red-400'"
          >/month</span
        >
      </p>
      <ul
        role="list"
        class="mt-8 space-y-3 text-sm leading-6"
        :class="color === 'green' ? 'text-green-400' : 'text-red-400'"
      >
        <li class="flex gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-5 flex-none"
            :class="color === 'green' ? 'text-green-400' : 'text-red-400'"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 12l2 2l4 -4"></path>
          </svg>
          7-day free trial
        </li>
      </ul>
    </div>
    <div v-else class="flex items-center justify-center h-full">
      <vue-feather
          type="plus"
          size="36"
          @click="isUp = undefined"
          class="cursor-pointer bg-slate-800/70 rounded-full p-4"
        ></vue-feather>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  setup() {
    return {};
  },
  props: {
    data: Object,
    color: String,
  },
  computed: {},
  methods: {
    formatName(name) {
     return name.length > 7 ? name.slice(0, 7) + "..." +  name.slice(-3) : name;
    },
  },
};
</script>

<style scoped></style>
