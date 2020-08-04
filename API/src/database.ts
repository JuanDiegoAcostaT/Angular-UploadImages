import mongoose from "mongoose";

export async function startConection() {
  await mongoose.connect("mongodb://localhost/photo-gallery-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("database is connected");
}
