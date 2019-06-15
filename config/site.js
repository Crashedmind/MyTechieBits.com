module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'MyTechieBits', // Navigation and Site Title
  titleAlt: 'MyTechieBits', // Title for JSONLD
  description: 'A site to capture techie bits and thoughts',
  url: 'https://www.mytechiebits.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://www.mytechiebits.com/mytechiebits.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'MyTechieBits', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Chris', // Author for schemaORGJSONLD
  themeColor: '#8eb5f2',
  backgroundColor: '#d3e0ff',
  twitter: '@Crashedmind2', // Twitter Username
};
