import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Patrycja Purgał`,
    description: "",
    siteUrl: `https://www.patrycjapurgal.pl`,
    image: `/android-chrome-512x512.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion", 
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://steambuddy.pl/api/graphql",
      },
    },
  ]
};

export default config;
