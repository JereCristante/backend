import "dotenv/config.js";
import connectToMongo from "../../utils/mongo.util.js";
import Activity from "../Activity.model.js";

//tuve un problema con el import de faker
const activities = [
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Actualizacion de Trellon't",
        description: "Bienvenido a la version beta de Trellon't",
        viewed: false
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Revisa las notificaciones",
        description: "Puedes tener notificaciones no vistas",
        viewed: false
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Crea tu primer tablero",
        description: "Crea un tablero y sus tareas",
        viewed: false
    },
];


async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        await Activity.insertMany(activities);
        console.log("actividades creadas!");
    } catch (error) {
        console.log(error);
    }
}

createData();
