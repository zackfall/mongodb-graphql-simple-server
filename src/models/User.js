import { Schema, model } from "mongoose";

// Creamos un schema para usuarios y definimos que datos vamos a guardar
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  age: {
    type: String,
  },
});

// Creamos el modelo para este schema para poder usarlo en cualquier parte
export default model("User", userSchema);
