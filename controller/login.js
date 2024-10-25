const Users = require("../data/Users.json");

// Router  /login
// Method  GET
// Access  Public

const getLogin = (req, res) => {
  res.render("login");
};

const postLogin = (req, res) => {
  const { ism, telefon } = req.body;
  let userFound = false;

  Users.forEach((user) => {
    if (user.ism === ism && user.contact_info.telefon === telefon) {
      userFound = true;
      user.contact_info.yangilangan_at = new Date().toISOString();
      res.render("Success", {
        title: "Qabulga yozildingiz",
      });
    }
  });

  if (!userFound) {
    res.redirect("/users/add-hospital");
  }
};

module.exports = {
  getLogin,
  postLogin,
};
