import { AppError } from "@src/libs/classes/app-error.class";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const findMoodboardByScenarioId = async (scenarioId: string) => {
  const scenarioWithMoodboard = await prisma.scenario.findUnique({
    where: { id: scenarioId },
    include: { moodBoard: true },
  });

  if (!scenarioWithMoodboard) throw new AppError("Not found!", 404);

  return scenarioWithMoodboard.moodBoard;
};

export { findMoodboardByScenarioId };
