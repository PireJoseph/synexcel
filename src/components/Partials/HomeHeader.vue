<template>
  <div>
    <div class="z-100 relative mt-0 h-auto">
      <div
        class="flex justify-start flex-col text-center text-white bg-gray-200 dark:bg-gray-900 py-8"
      >
        <div>
          <h2 class="h1 font-black lg:text-6xl text-4xl">
            <Logo />
          </h2>
          <p
            class="h5 font-sans font-bold lg:text-4xl text-2xl text-red-800 dark:text-red-500"
          >
            {{ sub }}
          </p>
          <!-- <div class="font-bold w-64 flex flex-col mx-auto px-2 text-xs">
            <p class="text-gray-700 dark:text-gray-200 lg:mb-2 text-left">
              ORGANISATION DE STAGES
            </p>
            <p class="text-red-700 dark:text-red-400 mb-2 text-right">
              DETECTION DE TALENTS
            </p>
            <p class="text-gray-700 dark:text-gray-200 mb-2 text-left">
              CATALOGUE DE MULTISPORTS
            </p>
            <p class="text-red-700 dark:text-red-400 mb-2 text-right">
              STRUCTURE D'EXCELLENCE
            </p>
            <p class="text-blue-900 dark:text-blue-200 text-center">
              MANAGEMENT SPORTIF
            </p>
          </div> -->
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
import Logo from "@/components/Partials/Logo.vue";

export default {
  components: {
    SVGEvolution,
    Logo,
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
