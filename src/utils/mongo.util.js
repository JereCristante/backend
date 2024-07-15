import {connect} from "mongoose";

async function connectToMongo(uri){
    try{
        await connect(uri);
        console.log("Connected to mongo db")
    }
    catch(error){
        console.log(error);
    }
}
export default connectToMongo;