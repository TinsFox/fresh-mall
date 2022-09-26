module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportUnit: "vw",
      fontViewportUnit: "vw",
    },
  },
};
