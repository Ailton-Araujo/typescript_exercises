import express from "express";
import { router } from "@/routers";

const app = express();

app.use(router);

app.listen(5000, () => {
  console.log("Server is up and running");
});
