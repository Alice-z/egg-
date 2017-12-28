'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys ='alice';

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/data',
    options: {}
  };
  return config;
};
