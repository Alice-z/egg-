'use strict';

const Controller = require('egg').Controller;
class User extends Controller {
  async login() {
    let { userName, passWord } = this.ctx.query
    let result = await this.service.user.login({
      userName,
      passWord,
    })
    this.ctx.body =result
  }
  async update() {
    let { userName, passWord } = this.ctx.query
    this.ctx.body = await this.service.user.update({
      userName,
      passWord
    })
  }
  async signin() {
    let { userName, passWord } = this.ctx.query
    let r = await this.service.user.signin({
      userName,
      passWord
    })
    this.ctx.body = r
  }
}

module.exports = User;
