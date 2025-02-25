import express from "express";
import router from "./router";

const app = express()

app.use(express.json());

app.use(router);

app.listen(1414, () => {
  console.log(`Example app listening on port ${1414}`)
})