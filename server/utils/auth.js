require('dotenv').config()
const expiration = "1hr";

console.log(process.env);

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, process.env.JWT, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },

  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
