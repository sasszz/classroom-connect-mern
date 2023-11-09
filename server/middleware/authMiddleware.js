// @ts-nocheck
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/personModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(" ")[1];
      //verify token]
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`); //decodes it so we can get the payload(which has the id)
      //Get user from the token since token has the user id from the payload
      req.user = await User.findById(decoded.id).select("-password"); //finding the user  by the id that is in the token
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized");
  }
});

module.exports = { protect };
