// vue.config.js
module.exports = {
  pages: {
    planning: {
      entry: "src/planning.js",
      template: "/planning.html",
      filename: "planning.html"
    }
  },
  devServer: {
    host: "mehr-handwerk.systori.localhost",
    port: "8080",
    proxy: {
      "/planning": {
        target: {
          protocol: "http",
          port: "8000",
          host: "mehr-handwerk.systori.localhost"
        },
        changeOrigin: true,
        // logLevel: "debug",
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  }
}