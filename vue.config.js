module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/SplaHack/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}