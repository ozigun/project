const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    vote: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Vote = mongoose.model("Vote", voteSchema);

module.exports = Vote;
