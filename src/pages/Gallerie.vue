<template>
  <Layout>
    <content-header title="Gallerie"></content-header>

    <div
      class="container pb-32 pt-10 sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-500 flex flex-col items-center"
    >
      <div
        v-for="gallerie in this.loadedGallerie"
        :key="gallerie.id"
        class="my-14"
      >
        <g-image :src="gallerie.node.image" />

        <div class="text-center mt-2">{{ gallerie.node.title }}</div>
      </div>
    </div>
    <ClientOnly>
      <infinite-loading @infinite="infiniteHandler" spinner="spiral">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
      </infinite-loading>
    </ClientOnly>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    entries: allGallerie(perPage: 4, page: $page, sortBy:"order") @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          image(width: 800)
          path
        }
      }
    }
  }
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  metaInfo: {
    title: "Gallerie",
  },
  components: {
    ContentHeader,
  },
  data() {
    return {
      loadedGallerie: [],
      currentPage: 1,
    };
  },
  created() {
    this.loadedGallerie.push(...this.$page.entries.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.entries.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/gallerie/${this.currentPage + 1}`);
        if (data.entries.edges.length) {
          this.currentPage = data.entries.pageInfo.currentPage;
          this.loadedGallerie.push(...data.entries.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
