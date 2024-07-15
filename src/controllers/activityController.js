import Activity from "../models/Activity.model.js"

const create = async (req, res, next) => {
    try {
      //del body van a venir el nombre y la description del tablero
      //del middleware de jwt va a venir el id del usuario
      const data = req.body;
      data.user_id = req.user.id
      const one = await Activity.create(data);
      return res.status(201).json({
        message: "CREATED ACTIVITY_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };

  const read = async (req, res, next) => {
    try {
      let queries = { user_id: req.user.id };

      const all = await Activity.find(queries)
        .populate("user_id", "email")
        .sort("createdAt");
      if (all.length === 0) {
        const error = new Error("ACTIVITIES NOT FOUND");
        error.status = 404;
        throw error;
      }
      return res.status(200).json({
        response: all,
      });
    } catch (error) {
      return next(error);
    }
  };
  
  export {
    create,
    read
  };
  