<template>
  <div>
    <div class="w-full mb-2 overflow-x-hidden dark:text-gray-400">
      <h2 class="text-xl my-0">{{ $static.metadata.siteName }}</h2>
      <div class="menu-links">
        <ul>
          <li
            v-for="page in $static.allSectionPage.edges"
            :key="page.node.title"
            class="py-1 flex justify-start"
          >
            <g-link
              class="block py-1"
              :to="page.node.path"
              :title="page.node.name"
            >
              {{ page.node.title }}
            </g-link>
          </li>

          <br />
          <hr />
          <br />

          <div>
            <ul class="list-none flex justify-center lg:justify-end">
              <li class="mr-6">
                <g-link title="gallery" to="/gallerie/">
                  <font-awesome :icon="['fa', 'images']"></font-awesome>
                </g-link>
              </li>
              <li class="mr-6">
                <g-link title="contact" to="/contact/">
                  <font-awesome :icon="['fas', 'paper-plane']"></font-awesome>
                </g-link>
              </li>
              <li class="">
                <g-link title="nous rejoindre" to="/nous-rejoindre/">
                  <font-awesome :icon="['fas', 'user-plus']"></font-awesome>
                </g-link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

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
        path
      }
    }
  }
}
</static-query>
<script>
export default {};
</script>

<style></style>
