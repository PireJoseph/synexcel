<template>
  <div>
    <div class="z-100 relative mt-0 h-auto">
      <SVGEvolution
        width="1400"
        height="400"
        class="object-cover absolute -z-10 mt-32 h-full w-full dark:text-gray-500"
      />

      <div
        class="flex justify-start flex-col text-center text-white bg-gray-800 lg:pt-24 lg:pb-72 md:pt-24 md:pb-64 pt-24 pb-48 bg-opacity-50"
      >
        <div>
          <h2 class="h1 font-black lg:text-8xl text-6xl">
            <span class="text-gray-900 dark:text-gray-100">SYN</span
            ><span class="text-gray-100 dark:text-gray-500">EXCEL</span>
          </h2>
          <p
            class="h5 font-sans font-bold lg:text-5xl text-3xl text-red-900 mb-32"
          >
            {{ sub }}
          </p>
        </div>
        <div></div>
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
