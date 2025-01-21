require('dotenv').config()

const assert = require('node:assert').strict;
const { feature } = require('./data/feature.data');
const { productName } = require('./data/productName.data')

module.exports = {
    assert, feature, productName
}