// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "SYNEXCEL",
  siteDescription: "Synergie et excellence",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          whitelist: [
            "svg-inline--fa",
            "table",
            "table-striped",
            "table-bordered",
            "table-hover",
            "table-sm",
          ],
          whitelistPatterns: [
            /fa-$/,
            /blockquote$/,
            /code$/,
            /pre$/,
            /table$/,
            /table-$/,
            /vueperslide$/,
            /vueperslide-$/,
          ],
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: false,
        shouldTimeTravel: false,
        shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "content/site/*.json",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Section",
        path: "./content/section/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "SectionPage",
        path: "./content/section-page/*.md",
        refs: {
          section: {
            typeName: "Section",
          },
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "CustomPage",
        path: "./content/pages/*.md",
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title", "content"],
        collections: [
          {
            typeName: "SectionPage",
            indexName: "SectionPage",
            fields: ["title", "section", "excerpt", "content"],
          },
        ],
      },
    },
    {
      use: "gridsome-plugin-svg",
    },
  ],
  transformers: {
    remark: {
      plugins: [
        "remark-autolink-headings",
        "remark-attr",
        [
          "gridsome-plugin-remark-prismjs-all",
          {
            noInlineHighlight: false,
            showLineNumbers: false,
          },
        ],
        require("./packages/gridsome-plugin-remark-figure"),
      ],

      processImages: false,
    },
  },
  templates: {
    CustomPage: [
      {
        path: "/:title",
      },
    ],
    Tag: [
      {
        path: "/tags/:title",
      },
    ],
    SectionPage: [
      {
        path: "/pages/:title",
      },
    ],
    Section: [
      {
        path: "/sections/:slug",
      },
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@pageImage", "@/assets/images");
  },
};
