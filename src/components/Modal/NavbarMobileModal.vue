<template>
  <div>
    <div class="w-full mb-2 overflow-x-hidden dark:text-gray-400">
      <h2 class="text-xl my-0">Navigation</h2>
      <div class="menu-links">
        <ul>
          <li
            v-for="section in $static.allSection.edges"
            :key="section.node.title"
            class="py-1 flex justify-start"
          >
            <g-link
              class="block py-1"
              :to="section.node.path"
              :title="section.node.name"
            >
              {{ section.node.title }}
            </g-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobileSubnav pl-2 dark:text-gray-400">
      <subnavigation />
    </div>
  </div>
</template>

<static-query>
query {
   metadata {
    siteName
  },
  allSection {
    edges{
      node{
        title, 
        description, 
        path
      }
    }
  }
}
</static-query>
<script>
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";

export default {
  components: {
    Subnavigation,
  },
};
</script>

<style></style>
