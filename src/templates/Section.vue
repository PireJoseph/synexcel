<template>
  <Layout>
    <content-header
      :title="$page.section.title"
      :description="$page.section.description"
      :sub="subTitle"
    ></content-header>

    <div class="container mx-auto">
      <div class="flex flex-wrap my-4">
        <CardItem
          v-for="edge in $page.section.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.section.path"
          :currentPage="$page.section.belongsTo.pageInfo.currentPage"
          :totalPages="$page.section.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.section.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    section(id: $id) {
      title
      description
      path
      belongsTo(perPage: 6, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on SectionPage {
              id
              title
              image(width: 800)
              path
              timeToRead
              featured
              humanTime: created(format: "DD MMM YYYY")
              datetime: created
              section {
                id
                title
                path
              }
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import Pagination from "~/components/Content/Pagination.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  components: {
    Pagination,
    CardItem,
    ContentHeader,
  },
  computed: {
    pageLabel: function() {
      var pluralize = require("pluralize");
      return pluralize("page", this.$page.section.belongsTo.totalCount);
    },
    subTitle: function() {
      return `${this.$page.section.belongsTo.totalCount} ${
        this.pageLabel
      } sont liées à cette section`;
    },
  },
  metaInfo() {
    return {
      title: this.$page.section.title,
    };
  },
};
</script>
