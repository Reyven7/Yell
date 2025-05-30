import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { findMoodboardByScenarioId } from "@src/services/moodboard.service";

const fetchMoodboar = asyncHandler(async (req: Request, res: Response) => {
  const moodboard = await findMoodboardByScenarioId(req.params.id);

  res.json(moodboard);
});

export { fetchMoodboar };
