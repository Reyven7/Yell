import express from "express";
import { authRoutes } from "./routes/auth.routes";
import { errorHandler } from "./middleware/error-handler";
import cors from "cors";
import { scenarioRoutes } from "./routes/scenario.routes";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", authRoutes());
app.use("/api/scenario", scenarioRoutes());

app.use(errorHandler);

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
