/**
 async Created by xuchaobing on 2017/7/24.
 */
const Service = require('egg').Service;

module.exports = app => {

  class UserService extends Service {

    async login(payload) {
      let { userName, passWord } = payload
      let user = await this.ctx.model.User.findOne({ userName, passWord });
      if (user) {
        this.ctx.cookies.set('TOKEN', userName, {
          httpOnly: false,
          encrypt: true,
          maxAge: 60000
        })
      }
      return {
        data: user || null,
        status: user ? 1 : 0,
        message: user ? "验证成功" : "用户名密码错误",
      }
    }

    async signin(payload) {
      let { userName, passWord } = payload
      let user = await this.ctx.model.User.findOne({ userName })
      return user ? {
          message: '用户已存在',
          code: 0
        } :
        await this.ctx.model.User.create(payload).then(r => ({
          message: "注册成功",
          code: 1
        }))
    }


    async update(params) {
      await this.ctx.model.User.findOneAndUpdate({
        userName: params.userName
      }, {
          $set: params
        })
      return {
        message: "修改密码成功",
        code: 1
      }
    }

    async remove(userName) {
      let result = await this.ctx.model.User.remove({
        userName
      });
      return result;
    }

    async role(params) {
      let users = await this.ctx.model.User.find(params);
      let result = {};
      result.meta = {
        total: users.length
      };
      result.data = users;
      return result;
    }

  }
  return UserService;
};
