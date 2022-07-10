const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const post = req.body.post;

  const newPost = new Post({ name, post });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post Deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").post((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      username = req.body.username;
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
