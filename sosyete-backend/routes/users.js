const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const newUser = new User({ username, password, email });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      username = req.body.username;
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
