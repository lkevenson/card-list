// const path = require("path");
const nextTranslate = require("next-translate");
// const Dotenv = require("dotenv-webpack");
module.exports = {
  // webpack: (config) => {
  //   config.resolve.alias["@"] = path.resolve(__dirname);
  //   config.plugins.push(new Dotenv({ silent: true }));
  //   return config;
  // },

  // env: {
  //   // SERVER_HOST: "Hello World",
  //   SERVER_HOST: process.env.SERVER_HOST,
  // },

  ...nextTranslate(),
};
