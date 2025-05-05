import { z as zod } from "zod";

export const createScenarioSchema = {
  body: zod.object({
    name: zod.string().min(1),
  }),
};

export const scenarioNamingSchema = {
  body: zod.object({
    id: zod.string().min(1),
    name: zod.string().min(1),
  }),
};

export const deleteScenarioSchema = {
  body: zod.object({
    id: zod.string().min(1),
  }),
};
