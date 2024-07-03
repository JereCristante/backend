import express, { urlencoded } from "express";
import "dotenv/config.js";
import cors from "cors";
import morgan from "morgan";
import notFoundPath from "./middleware/notFoundPath.mid.js";
import errorHandler from "./middleware/errorMiddleware.mid.js";
import connectToMongo from "./utils/mongo.util.js";



const server = express()

const PORT = process.env.PORT || 8080;
const ready = ()=> {
    console.log('server ready');
    connectToMongo(process.env.MONGO_URI);
}

server.listen(PORT,ready)
server.use(urlencoded({extended:true}))
server.use(express.json())
//middleware
server.use(cors())
server.use(morgan("dev"))

server.get("/", (req,res,next)=>{
    try{
        return res.json({
            statusCode:200,
            message: "Trellon't API"
        })
    }catch(error){
        console.log(error);
        return next(error);
    }
})
server.use(notFoundPath);
server.use(errorHandler);
