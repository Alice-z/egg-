'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys ='1';
  config.security={
    csrf: {
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'Token', // Session 中的字段名，默认为 csrfToken
      maxAge:120,
      httpOnly: true,
      encrypt: true,
    }
  }

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/blog',
    options: {}
  };
  return config;
};
