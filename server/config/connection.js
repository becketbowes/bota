const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGDB_URI || "mongodb://localhost:27017/bota-databas?directConnection=true" || process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
