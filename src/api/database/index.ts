import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

const mongoDB_URI = process.env.MONGODB_URI;

export function connectMongoDB(): void {
  if (mongoDB_URI) {
    mongoose.connect(
      mongoDB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions,
      () => console.log("connected MongoDB")
    );
  } else {
    console.log("error to connect mongoDB");
  }
}
