<template>
  <Layout>
    <ContentHeader title="Contact" sub="Leave us yout message" />

    <form
      action="https://formspree.io/f/xoqpbzag"
      method="POST"
      class="text-gray-900 dark:text-gray-100"
    >
      <label>
        Your email:
        <input type="text" name="_replyto" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>

      <!-- your other form fields go here -->

      <button type="submit">Send</button>
    </form>
  </Layout>
</template>

<script>
import ContentHeader from "~/components/Partials/ContentHeader.vue";

export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    ContentHeader,
  },
};
</script>
