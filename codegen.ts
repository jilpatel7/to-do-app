import type { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "https://localhost:3000/src/graphql",
//   documents: "src/**/*.graphql",
//   generates: {
//     "src/gql/": {
//       preset: "client",
//       plugins: [],
//     },
//   },
// };

// export default config;

const config: CodegenConfig = {
  schema: "http://localhost:8080/v1/graphql", // Replace with your GraphQL schema URL or local path
  documents: "src/graphql/**/*.graphql", // Path to your GraphQL operation documents
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript", // Generates TypeScript types for the schema
        "typescript-operations", // Generates TypeScript types for operations
        "typescript-react-query", // Generates React Query hooks
      ],
    },
  },
};

export default config;
