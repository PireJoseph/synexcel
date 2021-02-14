<template>
  <Layout>
    <content-header
      :image="$page.singlePage.image"
      :title="$page.singlePage.title"
      :sub="$page.singlePage.description"
    ></content-header>

    <div
      class="container pb-32 pt-10 sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-500"
    >
      <!-- <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">
        <section class="post-header container mx-auto px-0 mb-16 text-center">
          <h1
            class="text-gray-800 dark:text-gray-400 font-extrabold tracking-wider mb-6"
          >
            {{ $page.singlePage.title }}
          </h1>
        </section>
      </div> -->

      <div class="lg:mx-32 md:mx-16 px-4 mb-8">
        <section
          class="post-content container mx-auto relative dark:text-gray-400"
        >
          <div v-html="$page.singlePage.content"></div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    singlePage(id: $id) {
      title
      description
      content
      image
      image_caption
    }
  }
</page-query>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  components: {
    ContentHeader,
  },
  metaInfo() {
    return {
      title: this.$page.singlePage.title,
    };
  },
};
</script>
