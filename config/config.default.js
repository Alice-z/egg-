'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys ='1';
  config.exports = {
    security: {
      csrf: {
        headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    },
  };

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/data',
    options: {}
  };
  return config;
};
