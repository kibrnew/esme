module.exports = {
  siteUrl: "https://www.esme.com", // Your main site's URL
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 5000, // Split sitemap if there are more than 5000 URLs
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/", // Allow crawling of all other pages
        disallow: ["/utils/*"], // Block access to all paths under "/api/"
      },
    ],
    additionalSitemaps: [
      "https://www.lebufooballclub.com/sitemap.xml", // Main sitemap
    ],
  },
};
