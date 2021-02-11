<template>
  <div>
    <div class="z-100 relative mt-0 h-auto">
      <g-image
        v-if="image"
        :src="image"
        width="1400"
        height="400"
        class="object-cover absolute -z-10 h-full w-full"
      ></g-image>

      <slot>
        <div
          class="text-center text-white lg:py-48 md:py-32 py-24"
          style="backgroundColor: rgba(31, 41, 55, 0.5)"
        >
          <h2 v-if="title != null" class="h1 font-extrabold">{{ title }}</h2>
          <p v-if="sub != null" class="h5 font-sans">{{ sub }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    sub: {
      type: String,
      default: null,
    },
    image: {
      type: String | Object,
      default: null,
    },
  },
};
</script>

<style></style>
