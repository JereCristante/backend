import "dotenv/config.js";
import connectToMongo from "../../utils/mongo.util.js";
import List from "../List.model.js";

//tuve un problema con el import de faker
const lists = [
    {
        board_id: "6695401b34dc9de794df0050",
        name: "To Do",
    },
];


async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        await List.insertMany(lists);
        console.log("listas creadas!");
    } catch (error) {
        console.log(error);
    }
}

createData();
