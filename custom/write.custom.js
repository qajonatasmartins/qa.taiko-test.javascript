const { write, press } = require('taiko');
async function writeAndEnter(text) {
    await write(text);
    await press('Enter');
}

module.exports = {
    writeAndEnter
}