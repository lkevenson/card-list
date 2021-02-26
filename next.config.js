const nextTranslate = require("next-translate");
module.exports = {
  env: {
    SERVER_HOST: process.env.SERVER_HOST,
  },

  ...nextTranslate(),
};
