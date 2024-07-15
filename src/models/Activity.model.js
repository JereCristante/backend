import { Schema, Types, model } from "mongoose";

const collection = "activities";

const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    viewed: { type: Boolean, required: true },
    user_id: { type: Types.ObjectId, ref: "users", required: true }
  },
  { timestamps: true }
);

const Activity = model(collection, schema);
export default Activity;
