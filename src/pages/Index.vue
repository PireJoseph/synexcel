<template>
  <Layout>
    <HomeHeader
      :title="$static.metadata.siteName"
      :sub="$static.metadata.siteDescription"
    />

    <div class="container mx-auto">
      <div class="flex flex-wrap my-4">
        <FeaturedCard
          v-if="$page.entries.totalCount > 0"
          :records="$page.entries.edges"
        />

        <CardItem
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    entries: allSectionPage(perPage: 24, page: $page, sortBy:"order") @paginate {
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
          description
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import FeaturedCard from "~/components/Content/FeaturedCard.vue";
import HomeHeader from "~/components/Partials/HomeHeader.vue";

export default {
  metaInfo: {
    title: "Accueil",
  },
  components: {
    CardItem,
    FeaturedCard,
    HomeHeader,
  },
};
</script>
