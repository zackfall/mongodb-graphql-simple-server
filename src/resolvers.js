import { tasks } from "./sample";
import User from "./models/User";

// Los reselvers nos indican que es lo que va a pasar cuando se haga una consulta a algún tipo
export const resolvers = {
  // Esto es para espocificar a que consulta el resolver se refiere
  Query: {
    hello: () => {
      return "Hello world with Graphql";
    },
    greet(_, { name }, ctx) {
      console.log(ctx);
      return `Hello ${name}!`;
    },
    tasks() {
      return tasks;
    },
    // Buscamos todos los usuarios dentro del modelo user en la base de datos
    async users() {
      return await User.find();
    },
  },
  // Aquí definimos todas las acciones de las mutaciones
  Mutation: {
    createTask(_, { input }) {
      // Le añadimos el id a la tarea
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    // Creamos un usuario con los datos pasados desde el cliente y lo guardamos en mongodb
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findOneAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
