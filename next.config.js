module.exports = {
  reactStrictMode: true,
  /* images: {
    domains: ['images.unsplash.com'],
  }, */
  eslint: {
    // Allow production builds to successfully complete even with ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
