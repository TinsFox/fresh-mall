const withImages = require("next-images");

const withTM = require("next-transpile-modules")(["react-vant"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
      ignoreBuildErrors: true,
    },
  })
);

module.exports = nextConfig;
