const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGDB_URI || "mongodb://127.0.0.1/mernshopping" || process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
