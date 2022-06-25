import jwt from "jsonwebtoken";

const secret = "bimat";

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500;

      let decodedData;

      if (token && isCustomAuth) {
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData?.id;
      } else {
        decodedData = jwt.decode(token);

        req.userId = decodedData?.sub;
      }

      next();
    } else {
      res.status(404).json({ message: "No token was found. Login plzzz" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
