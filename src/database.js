import mongoose from "mongoose";

export async function connect() {
  try {
    // Iniciamos la conección a mongodb
    await mongoose.connect("mongodb://localhost/mongodbgraphql", {
      useNewUrlParser: true,
    });
    console.log(">>> DB is connected");
  } catch (e) {
    console.log("Somenthing goes wrong");
    console.log(e);
  }
}
