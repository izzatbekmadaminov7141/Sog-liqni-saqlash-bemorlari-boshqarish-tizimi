const fs = require("fs");
const path = require("path");
const pathToUsers = path.join(__dirname, "../data/Users.json");

module.exports = class User {
  constructor(
    id,
    ism,
    yosh,
    tibbiy_tarix,
    telefon,
    elektron_pochta,
    adres,
    yangilangan_at,
    yaratilgan_at
  ) {
    this.id = id;
    this.ism = ism;
    this.yosh = yosh;
    this.tibbiy_tarix = tibbiy_tarix;
    this.telefon = telefon;
    this.elektron_pochta = elektron_pochta;
    this.adres = adres;
    this.yangilgan_at = yangilangan_at;
    this.yaratilgan_at = yaratilgan_at;
  }
  save() {
    let users = [];
    fs.readFile(pathToUsers, "utf8", (err, data) => {
      if (err) throw err;
      users = JSON.parse(data);
      users.push({
        id: this.id,
        ism: this.ism,
        yosh: this.tibbiy_tarix,
        contact_info: {
          telefon: this.telefon,
          elektron_pochta: this.elektron_pochta,
          adres: this.adres,
          yangilangan_at: this.yaratilgan_at,
          yaratilgan_at: this.yangilgan_at,
        },
      });

      fs.writeFile(pathToUsers, JSON.stringify(users, null, 2), (err) => {
        if (err) throw err;
      });
    });
  }
  static getAll() {
    return JSON.parse(fs.readFileSync(pathToUsers, "utf8"));
  }
};
