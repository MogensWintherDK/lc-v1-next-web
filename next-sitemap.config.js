/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
    siteUrl: 'https://' + process.env.LNX_HOSTNAME,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/pain-points*'],
}