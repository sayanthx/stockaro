<template>
  <div
    class="flex relative items-center justify-center h-screen p-12 overflow-hidden"
  >
    <div class="monitor left-[-15%] absolute">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 200"
        style="enable-background: new 0 0 500 200"
        xml:space="preserve"
      >
        <g>
          <polyline
            class="ekg"
            points="486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 
							213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 	"
          />
        </g>
      </svg>
    </div>
    <div class="monitor right-[-15%] absolute">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 200"
        style="enable-background: new 0 0 500 200"
        xml:space="preserve"
      >
        <g>
          <polyline
            class="ekg"
            points="486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 
							213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 	"
          />
        </g>
      </svg>
    </div>
    <Dashboard />
  </div>
</template>
<script>
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: { Dashboard },
  setup() {
    return {};
  },
  computed: {},
};
</script>

<style scoped></style>
