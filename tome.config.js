/** @type {import('@tomehq/core').TomeConfig} */
export default {
  name: "My Docs",
  theme: {
    preset: "amber",
    mode: "auto",
  },
  navigation: [
    {
      group: "Overview",
      pages: ["index"],
    },
    {
      group: "Tutorials",
      pages: ["tutorials/getting-started", "tutorials/deploy"],
    },
    {
      group: "Guides",
      pages: ["guides/components", "guides/configuration"],
    },
    {
      group: "Reference",
      pages: ["reference/config", "reference/components", "reference/cli"],
    },
    {
      group: "Concepts",
      pages: ["concepts/how-tome-works", "concepts/file-routing"],
    },
  ],
  // socialLinks: [
  //   { platform: "github", url: "https://github.com/your-org/your-repo" },
  //   { platform: "twitter", url: "https://x.com/your-handle" },
  // ],
};
