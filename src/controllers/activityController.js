import Activity from "../src/models/Activity.model.js"

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