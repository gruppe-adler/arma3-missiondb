require('typescript-require');

import async = require('async');
import bunyan = require('bunyan');

import Pbo = require('./lib/Pbo');
import Webserver = require('./lib/Webserver');
import MissionFetcherLocal = require('./lib/MissionFetcherLocal');

var logger = bunyan.createLogger({name: 'main'});

async.waterfall([
    Pbo.init,
    Webserver.init,
    MissionFetcherLocal.init
], function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    logger.info('ready!');
});
