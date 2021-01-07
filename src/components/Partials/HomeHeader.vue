<template>
  <div>
    <div class="z-100 relative mt-0 h-auto">
      <SVGEvolution
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full dark:text-gray-500"
      />

      <div
        class="text-center text-white bg-gray-800 lg:py-48 md:py-32 py-24 bg-opacity-50"
      >
        <h2 class="h1 font-extrabold">{{ title }}</h2>
        <p class="h5 font-sans">{{ sub }}</p>
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
