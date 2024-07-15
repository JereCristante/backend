import "dotenv/config.js";
import connectToMongo from "../../utils/mongo.util.js";
import Board from "../Board.model.js";

//tuve un problema con el import de faker
const boards = [
    {
        user_id: "66953862a9127bdf1643e308",
        name: "Migracion de Sistema",
        description: "migrar el sistema a cloud",
    },
];


async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        await Board.insertMany(boards);
        console.log("tableros creados!");
    } catch (error) {
        console.log(error);
    }
}

createData();
