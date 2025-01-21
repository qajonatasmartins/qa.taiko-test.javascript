const { openBrowser, goto } = require("taiko")

async function openWebSite(url) {
    await openBrowser({ headless: true })
    await goto(url)
}

module.exports = {
    openWebSite
}