/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.whatsbill.com',
    generateRobotsTxt: true,
    exclude: ['/app', '/auth/callback'],
}