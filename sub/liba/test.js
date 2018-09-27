const { libTest } = require('./sub/libb/test')

function getContent () {
    return `test liba from self >> ${libTest()}`
}

module.exports = {
    getContent,
}