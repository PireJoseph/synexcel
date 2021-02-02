const _ = require("lodash");

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.onCreateNode((options) => {
    if (options.internal.typeName === "CustomPage") {
      options.subtitle = options.subtitle || "";
    }
    if (options.internal.typeName === "SectionPage") {
      options.featured = options.featured ? options.featured : false;
      options.tags =
        typeof options.tags === "string"
          ? options.tags.split(",").map((string) => string.trim())
          : options.tags;
      return {
        ...options,
      };
    }
  });

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const { data } = await graphql(`
      {
        allSectionPage {
          edges {
            node {
              id
              path
              tags
            }
          }
        }
      }
    `);

    data.allSectionPage.edges.forEach(({ node }) => {
      //without the map, you will get an 500 error
      //because the graphql filter requires an array
      //not an object
      var tags = _.map(node.tags, function(tag) {
        return tag.title;
      });
      createPage({
        path: node.path,
        component: "./src/templates/page/SectionPage.vue",
        context: {
          id: node.id,
          tags: tags,
        },
      });
    });
  });
};
