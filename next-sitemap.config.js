/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:5000',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
}