module.exports = app => {
  const mongoose = app.mongoose;
  const ProjectSchema = new mongoose.Schema({
    client: { type: String },//委托单位
    project_address: { type: String },
    project_name: { type: String },
    leader: { type: String },
    years: { type: String },
    layers: { type: String },
    structure: { type: String },
    polygon: {
      center: {
        lng: Number,
        lat: Number
      },
      path: Array,
      zoom: Number
    }
  })
  return mongoose.model('project', ProjectSchema);
};

