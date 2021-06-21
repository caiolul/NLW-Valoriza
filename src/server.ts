import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Ola mundo" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Ola mundo" });
});

app.listen(3000, () => {
  console.log("Server running");
});
