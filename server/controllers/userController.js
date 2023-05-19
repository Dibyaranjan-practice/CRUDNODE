require("./../database/connection");
const userModel = require("./../models/user");
exports.getSignUp = (req, res, next) => {
  res.render("user/signup.ejs");
};
// const user = new userModel({
//   name: "dibya",
//   email: "dibya@gmail.com",
//   username: "dibya",
//   password: "dibya",
// });
// user
//   .save()
//   .then((msg) => res.end("Saved Successfully"))
//   .catch((err) => res.end("Unable to Create User"));
