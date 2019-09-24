const path = require("path");
const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

require("dotenv").config();

const envName = process.env.NODE_ENV;
const envFile = envName === "production" ? ".env" : `.env.${envName}`;
const envPath = `./src/config/env/${envFile}`;

module.exports = withImages({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: envPath,
        systemvars: true
      })
    ];

    return config;
  }
});
