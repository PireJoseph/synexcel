<template>
  <nav
    class="hidden lg:block xl:block items-center justify-between flex-wrap container mx-auto py-3 z-20 dark:text-gray-400"
  >
    <div class="flex-grow flex items-center w-auto mx-4">
      <div class="flex items-center flex-shrink-0 mr-6">
        <g-link to="/">
          <span class="font-semibold text-xl tracking-tight">
            <Logo />
          </span>
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
            v-for="page in $static.allSectionPage.edges"
            :key="page.title"
            class="px-4 py-1 flex item-center"
          >
            <g-link class="py-1" :to="page.node.path">
              <ClientOnly>
                <v-popover
                  placement="bottom"
                  popoverClass="navbar-popover"
                  trigger="hover"
                  offset="25"
                >
                  {{ page.node.title }}
                  <template slot="popover">
                    {{ page.node.description }}
                  </template>
                </v-popover>
              </ClientOnly>
            </g-link>
          </li>
        </ul>
      </div>

      <div class="inline-block">
        <ul class="list-none flex justify-center lg:justify-end">
          <li class="mr-6">
            <g-link title="contact" to="/contact/">
              <font-awesome :icon="['fas', 'paper-plane']"></font-awesome>
            </g-link>
          </li>
          <li class="mr-6">
            <g-link title="nous rejoindre" to="/nous-rejoindre/">
              <font-awesome :icon="['fas', 'user-plus']"></font-awesome>
            </g-link>
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
  data: function() {
    return {
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true,
      },
    };
  },
  components: {
    ThemeSwitcher,
    Logo,
  },
  props: {
    theme: {
      type: String,
    },
  },
  methods: {},
  watch: {},
};
</script>

<static-query>
query {
  metadata {
    siteName
  },
  allSectionPage(sortBy: "order", order: ASC) {
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
