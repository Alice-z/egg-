'use strict';

const Controller = require('egg').Controller;

class project extends Controller {

  async find() {
    console.log(this.ctx.session)
    if(!this.ctx.session){
      this.ctx.body={
        x:'session失效'
      }
    }
    let project_name = this.ctx.query.project_name
    this.ctx.body = await this.service.project.find(project_name)
  }

  async create() {
    let { query } = this.ctx
    this.ctx.body = await this.service.project.create(query)
  }

  async update() {
    let { query } = this.ctx
    this.ctx.body = await this.service.project.update(query)
  }
  async remove() {
    let { project_name } = this.ctx.query
    this.ctx.body = await this.service.project.remove(project_name)
  }

}

module.exports = project;
