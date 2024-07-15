import "dotenv/config.js";
import connectToMongo from "../../utils/mongo.util.js";
import Card from "../Card.model.js"

//tuve un problema con el import de faker
const cards = [
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Actualizacion del Plan del Proyecto",
        description: "Actualizar el plan del proyecto con los ultimos hitos y plazos",
        list_id: "66954092f220897582bab9de"
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Revision de Codigo",
        description: "Revisar el codigo enviado por el equipo de desarrollo para el ultimo sprint",
        list_id: "66954092f220897582bab9de"
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Presentacion al Cliente",
        description: "Preparar y entregar la presentacion de estado del proyecto al cliente",
        list_id: "66954092f220897582bab9de"
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Reunion de Equipo",
        description: "Llevar a cabo la reunión semanal del equipo para discutir el progreso y los obstaculos",
        list_id: "66954092f220897582bab9de"
    },
    {
        user_id: "66953862a9127bdf1643e308",
        title: "Analisis de Presupuesto",
        description: "Analizar el presupuesto del proyecto e informar cualquier discrepancia",
        list_id: "66954092f220897582bab9de"
    }
];


async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI);
        await Card.insertMany(cards);
        console.log("tarjetas creadas!");
    } catch (error) {
        console.log(error);
    }
}

createData();
