const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:3333/bota"  || 'mongodb+srv://chinny:nVaQiTvFY2pgeIZd@cluster0.3hyqse3.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
