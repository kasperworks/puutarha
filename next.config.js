module.exports = {
  reactStrictMode: true,
  /* images: {
    domains: ['images.unsplash.com'],
  }, */
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    // Allow production builds to successfully complete even with ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
