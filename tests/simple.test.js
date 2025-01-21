const { closeBrowser, listItem } = require('taiko');
const { feature, productName, assert } = require('../constants');
const { openWebSite } = require('../custom/browser.custom');
const { writeAndEnter } = require('../custom/write.custom');
describe(productName, () => {

    before(async () => {
        await openWebSite(process.env.URL)
    });

    context(feature.todoMvc, async () => {
        it('[CT-0001] - Adicionar item na lista', async () => {
            await writeAndEnter('flying foxes')
            assert.equal(await listItem('flying foxes').exists(), true)
        });
    });

    after(async () => {
        await closeBrowser();
    });
});