import asyncHandler from "express-async-handler";
import { Request, response, Response } from "express";
import {
  createScenario,
  listUserScenarioNames,
  deleteScenario,
  updateScenarioName,
} from "@src/services/scenario.service";

export const handleCreateScenario = asyncHandler(
  async (req: Request, res: Response) => {
    const scenario = await createScenario(req.user.id, req.body.name);
    res.status(201).json(scenario);
  }
);

export const handleListScenarioNames = asyncHandler(
  async (req: Request, res: Response) => {
    const scenarios = await listUserScenarioNames(req.user.id);
    res.json(scenarios);
  }
);

export const handleDeleteScenario = asyncHandler(
  async (req: Request, res: Response) => {
    await deleteScenario(req.body.id);
    res.status(200).json({ message: "success deleted" });
  }
);

export const handleUpdateScenarioName = asyncHandler(
  async (req: Request, res: Response) => {
    await updateScenarioName(req.body.id, req.body.name);
    res.status(200).json({ message: "success updated" });
  }
);
