import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  return response.json({ message: "Ola mundo" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Ola mundo" });
});

app.listen(3000, () => {
  console.log("Server running");
});
