/**
 async Created by xuchaobing on 2017/7/24.
 */
const Service = require('egg').Service;

module.exports = app => {

  class ProjectService extends Service {

    async find(project_name) {
      return project_name ?
      await this.ctx.model.Project.findOne({ project_name }) :
      await this.ctx.model.Project.find({})
    }

    async create(palyload) {
      let project = await this.ctx.model.Project.findOne({
        project_name: palyload.project_name
      })
      return project ? {
        message: '项目名已存在',
        code: 0
      } :
        await this.ctx.model.Project.create(palyload).then(r => r)
    }

    async update(params) {
      await this.ctx.model.Project.findOneAndUpdate({
        project_name: params.project_name
      }, {
          $set: params
        })
      return {
        message: "修改成功",
        code: 1
      }
    }

    async remove(project_name) {
      let result = await this.ctx.model.Project.remove({
        project_name
      });
      return result;
    }

  }
  return ProjectService;
};
