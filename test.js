const { libTest } = require('./sub/libb/test')
const { upperCase } = require('lodash')

function getContent () {
    return `v0.1.4 test liba from self >> ${libTest()} + ${upperCase('foo zar')}`
}

module.exports = {
    getContent,
}