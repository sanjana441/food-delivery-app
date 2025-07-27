import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aarpit688:Aarpit123456789@cluster0.pftybbf.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
