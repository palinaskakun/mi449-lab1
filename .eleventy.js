module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("screen.css");
    eleventyConfig.addPassthroughCopy("images/*.png");
  };