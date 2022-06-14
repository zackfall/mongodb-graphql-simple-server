// Importamos express para empezar un servidor
import express from "express";
// Importamos una forma de incluir graphiql con express
import { graphqlHTTP } from "express-graphql";
// Los schemas son una forma de decirle a graphql que es la que vamos a poder consultar desde
// el cliente.
import schema from "./schema";
import { connect } from "./database";

// Lo iniicializamos
const app = express();
connect();

// Esta ruta nos llevara a graphiql que es como un editor de graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // activamos graphiql
    graphiql: true,
    schema,
    // Sirve para pasarle datos a todos los reselvers como parametro
    context: {
      messageId: "test",
    },
  })
);

// Escuchamos en el puerto 3000 e imprimimos en pantalla un poco de información.
app.listen(3000, () => console.log("Server on http://localhost:3000"));
