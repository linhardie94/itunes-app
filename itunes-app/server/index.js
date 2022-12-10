import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import favouriteRoutes from "./routes/favourites.js";
import helmet from 'helmet';

const app = express();
const port = 5000;

//helmet
app.use(helmet());

app.use(bodyParser.json());
app.use(cors());

app.use("/", favouriteRoutes);

app.get("/", (req, res) => res.send("Hello"));
app.all("*", (req, res) => res.send("Route does not exist"));

app.listen(port, () => 
    console.log(`Server is listening on port: http://localhost:${port}`)
);