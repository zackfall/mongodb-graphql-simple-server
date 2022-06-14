// Esta función crea un nuevo schema que une los resolvers y las definiciones de tipos
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

// Estos son las definiciones de los tipos dentro de graphql
const typeDefs = `
  # Creamos un tipo de query para hacer llamadas a Graphql
  type Query {
    hello: String
    greet(name: String!): String
    tasks: [Task]
    users: [User]
  }

  # Hay algo que se llaman mutaciones, que son como lo contrario a las queries. Las mutacciones nos
  # permiten hacer queries que reciben datos para hacer cambios dentro del servidor.
  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
  }

  # Creamos nuestro propio tipo task para pasarselo como tipo de dato a un field en la query
  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    age: Int!
  }

  # Argumentos que reciben las mutaciones
  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    firstname: String
    lastname: String
    age: Int
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
