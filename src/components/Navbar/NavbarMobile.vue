<template>
  <nav
    id="navbar-mobile"
    class="block lg:hidden flex items-center justify-between flex-wrap container mx-auto py-4 dark:text-gray-400"
  >
    <div class="block flex-grow flex items-center w-auto mx-4">
      <div class="flex items-center flex-shrink-0 mr-6">
        <a
          role="button"
          @click.prevent="openNavbarModal()"
          aria-label="Open Navigation"
          title="Open Navigation"
        >
          <font-awesome :icon="['fas', 'bars']"></font-awesome>
        </a>
      </div>
      <div class="flex-grow text-center font-bold text-lg">
        <g-link to="/">
          <span class="font-semibold text-xl tracking-tight">
            <Logo />
          </span>
        </g-link>
      </div>

      <div class="inline-block">
        <ul class="list-none flex justify-center lg:justify-end">
          <li>
            <theme-switcher v-on="$listeners" :theme="theme" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import Logo from "@/components/Partials/Logo.vue";

export default {
  props: {
    theme: {
      type: String,
    },
    showNavigation: {
      type: Boolean,
    },
  },
  components: {
    ThemeSwitcher,
    Logo,
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss" scoped>
#navbar-mobile {
  height: 64px;
  min-height: 64px;
}
</style>
