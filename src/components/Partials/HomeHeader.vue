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
          <p class="h5 font-sans font-bold lg:text-4xl text-2xl text-red-900">
            {{ sub }}
          </p>
          <p
            class="hidden lg:block lg:my-8 font-sans font-bold text-black dark:text-white text-xl"
          >
            Spécialisé en stages, détection de talents, catalogue multisports,
            laboratoire d’entraînement intensif et management sportif
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
