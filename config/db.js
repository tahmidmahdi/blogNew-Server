// Require mongoose library for MongoDB
const mongoose = require("mongoose");

// MongoDB cloud url
const MONGOURI = "mongodb+srv://happydesk_e163c8:happydesk_e6k18i6z@happydesk-interview.cnlkx.mongodb.net/intern-test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoServer!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;