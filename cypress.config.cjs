const { defineConfig } = require("cypress");
const webpackConfig = require("./config/webpack.cypress.config.cjs");

module.exports = defineConfig({
  projectId: 'e2i1nb',
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    specPattern: ["src/**/*.cy.{js,jsx}"],
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

      return config;
    },
  },

  e2e: {
    setupNodeEvents() {
        // on, config не використовуємо ці зміні в цій функції тому виникає помилка eslint
        // implement node event listeners here
    },
},
});
