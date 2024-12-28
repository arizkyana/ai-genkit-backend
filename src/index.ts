import env from "dotenv";
env.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import ai from "@/routes/ai";

(async function () {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/ai", ai());

  app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
  });
})();
