module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/SplatHack/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}