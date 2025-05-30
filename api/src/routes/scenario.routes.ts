import { fetchMoodboar } from "@src/controllers/moodboard.controller";
import {
  handleCreateScenario,
  handleDeleteScenario,
  handleListScenarioNames,
  handleUpdateScenarioName,
} from "@src/controllers/scenario.controller";
import {
  authMiddleware,
  ownerMiddleware,
} from "@src/middleware/auth-middleware";
import { validate } from "@src/middleware/validate";
import {
  scenarioNamingSchema,
  deleteScenarioSchema,
  createScenarioSchema,
} from "@src/schemes/scenario.schema";
import { Router } from "express";

export const scenarioRoutes = () => {
  const router = Router();

  router.post(
    "/",
    authMiddleware,
    validate(createScenarioSchema),
    handleCreateScenario
  );
  router.get("/", authMiddleware, handleListScenarioNames);
  router.delete(
    "/:id",
    authMiddleware,
    validate(deleteScenarioSchema),
    ownerMiddleware,
    handleDeleteScenario
  );

  router.put(
    "/rename/:id",
    authMiddleware,
    validate(scenarioNamingSchema),
    ownerMiddleware,
    handleUpdateScenarioName
  );

  router.get("/:id/moodboard", authMiddleware, ownerMiddleware, fetchMoodboar);

  return router;
};
