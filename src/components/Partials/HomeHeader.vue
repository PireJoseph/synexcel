<template>
  <div>
    <div class="z-100 relative mt-0 h-auto">
      <div
        class="flex justify-start flex-col text-center text-white bg-gray-800 py-8 bg-opacity-50"
      >
        <div>
          <h2 class="h1 font-black lg:text-6xl text-4xl">
            <span class="text-gray-900 dark:text-gray-100">SYN</span
            ><span class="text-gray-100 dark:text-gray-500">EXCEL</span>
          </h2>
          <p class="h5 font-sans font-bold lg:text-4xl text-2xl text-red-900">
            {{ sub }}
          </p>
        </div>
        <div>
          <SVGEvolution
            class="inline-block w-full h-48 lg:h-72 dark:text-gray-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGEvolution from "@/assets/svg/evolution.svg?inline";

export default {
  components: {
    SVGEvolution,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    sub: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
