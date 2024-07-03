import { Schema, model} from "mongoose"

const collection = "users";

const schema = new Schema({
    email:{ type:String, required:true,unique:true,index: true},
    password:{ type:String, required:true},
    avatar:{ type:String, default:"https://www.svgrepo.com/show/452030/avatar-default.svg"},
    age:{type:Number},
    city:{type:String}
},{timestamps:true});

const User = model(collection,schema);
export default User;