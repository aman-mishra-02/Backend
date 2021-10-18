const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/RelationshipDemo");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database Connected");
});

const userSchema = new Schema({
  first: String,
  last: String,
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.address.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });

  const res = await u.save();

  console.log(res);
};

makeUser();
