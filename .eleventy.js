module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/fonts/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
