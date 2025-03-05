import mongoose from "mongoose";
type ConnectionObject = {
    isConnected?: number;
}
const connection:ConnectionObject = {};

export const connect = async () => {
    if(connection.isConnected){
        console.log("Already connected to the database");
        return;
    }
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is not defined');
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
        process.exit(1);
    }
}