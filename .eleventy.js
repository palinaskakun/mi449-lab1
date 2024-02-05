module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("screen.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("eleventy.js");
    // eleventyConfig.addPassthroughCopy("moon.html");
    // eleventyConfig.addPassthroughCopy("index.html");
  };