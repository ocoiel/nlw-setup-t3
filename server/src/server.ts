import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();

app.register(cors);

app.get("/", () => {
  return "hello";
});

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("Server listening on port 3333"));
