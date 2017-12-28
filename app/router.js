'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.user.login);
  router.get('/signin', controller.user.signin);
  router.get('/project/find', controller.project.find);
  router.post('/project/create', controller.project.create);
  router.get('/project/update', controller.project.update);
  router.get('/project/remove', controller.project.remove);
};
