<template>
  <nav
    class="hidden md:block lg:block xl:block items-center justify-between flex-wrap container mx-auto py-3 z-20 dark:text-gray-400"
  >
    <div class="flex-grow flex items-center w-auto mx-4">
      <div class="flex items-center flex-shrink-0 mr-6">
        <g-link to="/">
          <span class="font-semibold text-xl tracking-tight">{{
            $static.metadata.siteName
          }}</span>
        </g-link>
      </div>
      <div class="flex-grow font-bold">
        <ul class="list-none flex justify-left">
          <li class="mr-2 py-1 flex item-center">
            <theme-switcher
              class="flex items-center"
              v-on="$listeners"
              :theme="theme"
            />
          </li>
          <li
            v-for="section in $static.allSection.edges"
            :key="section.title"
            class="px-4 py-1 flex item-center"
          >
            <g-link class="py-1" :to="section.node.path">
              <ClientOnly>
                <v-popover
                  placement="bottom"
                  popoverClass="navbar-popover"
                  trigger="hover"
                  offset="25"
                >
                  {{ section.node.title }}
                  <template slot="popover">
                    {{ section.node.description }}
                  </template>
                </v-popover>
              </ClientOnly>
            </g-link>
          </li>
          <li class="px-4 py-1">
            <a
              role="button"
              @click.prevent="toggleSubNavigation()"
              class="block px-4 py-1"
              aria-label="Open Subnavigation"
              title="Open Subnavigation"
              v-bind:class="{
                'text-blue-600': showSubNavigation,
                '': !showSubNavigation,
              }"
            >
              <font-awesome
                :icon="['fas', 'ellipsis-h']"
                size="lg"
              ></font-awesome>
            </a>

            <div
              v-click-outside="onClickOutside"
              class="py-4 mega-menu mb-16 border-t border-gray-200 shadow-xl bg-white dark:bg-black dark:border-gray-900"
              v-bind:class="{
                '': showSubNavigation,
                hidden: !showSubNavigation,
              }"
            >
              <div>
                <subnavigation />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="inline-block">
        <ul class="list-none flex justify-center md:justify-end">
          <li class="mr-6">
            <font-awesome :icon="['fas', 'user-plus']"></font-awesome>
          </li>
          <li class="mr-6">
            <font-awesome :icon="['fas', 'shopping-cart']"></font-awesome>
          </li>

          <li class="mr-6">
            <search-button v-on="$listeners"></search-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import SearchButton from "~/components/Navbar/SearchButton.vue";
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";

export default {
  data: function() {
    return {
      showSubNavigation: false,
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true,
      },
    };
  },
  components: {
    ThemeSwitcher,
    SearchButton,
    Subnavigation,
  },
  props: {
    theme: {
      type: String,
    },
    hideSubnav: {
      type: Boolean,
    },
  },
  methods: {
    toggleSubNavigation() {
      this.showSubNavigation = !this.showSubNavigation;
    },
    onClickOutside(event) {
      if (!event.defaultPrevented && this.showSubNavigation == true) {
        this.toggleSubNavigation();
      }
    },
    hideSubNavigation() {
      this.showSubNavigation = false;
    },
  },
  watch: {
    hideSubnav() {
      if (this.hideSubnav) {
        this.hideSubNavigation();
      }
    },
    $route(to, from) {
      this.hideSubNavigation();
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  },
  allSection(sortBy: "order", order: ASC) {
    edges{
      node{
        title, 
        description, 
        order
        path
      }
    }
  }
}
</static-query>
