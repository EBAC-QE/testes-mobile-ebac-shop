const { bsConf } = require('./bs.conf');
const { localConf } = require('./local.conf');
const { sauceConf } = require('./sauce.config');

require('dotenv').config()

function getConfig(){
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'browserstack':
            return bsConf
        case 'saucelabs':
            return sauceConf
    }
}


exports.config = getConfig()