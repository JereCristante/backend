import "dotenv/config.js"
import connectToMongo from "../../utils/mongo.util.js"
import User from "../User.model.js"

const users = [
    {
        email: "juan@gmail.com",
        password: "1234",
        age: 25,
      },
      {
        email: "jorge@gmail.com",
        password: "1234",
        age: 19,
      },
]

async function createData() {
    try {
      await connectToMongo(process.env.MONGO_URI);
      await User.insertMany(users);
      console.log("usuarios creados!");
    } catch (error) {
      console.log(error);
    }
  }
  
  createData();