module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    index: {
      entry: "src/main.js",
      title: "SplatHack",
    }
  },
  publicPath: process.env.NODE_ENV === "production"
    ? "/SplatHack/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}