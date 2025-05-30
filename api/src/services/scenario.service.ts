import { AppError } from "@src/libs/classes/app-error.class";
import { Prisma, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const findUserScenarios = async (id: string) => {
  const scenarios = await prisma.scenario.findMany({ where: { userId: id } });

  if (!scenarios) throw new AppError("Not avalible scenarios", 404);

  return scenarios;
};

export const getScenarioById = async (
  id: string,
  select?: Prisma.ScenarioSelect
) => {
  const scenario = await prisma.scenario.findUnique({
    where: { id },
    select,
  });
  if (!scenario) throw new AppError("Not found scenario", 404);

  return scenario;
};

export const findScenarios = async (
  id: string,
  select?: Prisma.ScenarioSelect
) => {
  const scenarios = await prisma.scenario.findUnique({ where: { id }, select });
  if (!scenarios) throw new AppError("Not avalible scenarios", 404);
  return scenarios;
};

export const listUserScenarioNames = async (userId: string) => {
  const scenarios = await prisma.scenario.findMany({
    where: { userId: userId },
    select: { name: true, id: true },
  });

  if (!scenarios) throw new AppError("Not avalible scenarios", 404);

  return scenarios;
};

export const createScenario = async (userId: string, name: string) => {
  const scenario = await prisma.scenario.create({
    data: {
      name: name,
      userId: userId,
    },
  });

  return scenario;
};

export const deleteScenario = async (id: string) => {
  await prisma.scenario.delete({ where: { id } });
};

export const updateScenarioName = async (id: string, name: string) => {
  await prisma.scenario.update({ where: { id }, data: { name } });
};
