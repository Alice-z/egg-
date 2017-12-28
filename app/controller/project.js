'use strict';

const Controller = require('egg').Controller;

class project extends Controller {

  async find() {

    let { project_name } = this.ctx.query
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
