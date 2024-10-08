import User from "../models/User.model.js";

async function accountExists(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const error = new Error("USER REGISTERED");
      error.status = 400;
      throw error;
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

export default accountExists;
