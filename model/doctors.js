const fs = require("fs");
const path = require("path");
const pathToDoctors = path.join(__dirname, "../data/Doctor.json");

module.exports = class Doctor {
  constructor(id, name, job) {
    this.id = id;
    this.name = name;
    this.job = job;
  }
  static findAll() {
    return JSON.parse(fs.readFileSync(pathToDoctors, "utf8"));
  }
};
