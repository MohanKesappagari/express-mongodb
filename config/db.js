import mongoose from "mongoose";
const { connect } = mongoose;
export const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`Mongo connected:${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.log(e);
  }
};
