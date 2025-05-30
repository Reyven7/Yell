import { z as zod } from "zod";

export const createScenarioSchema = {
  body: zod.object({
    name: zod.string().min(1),
  }),
};

export const scenarioNamingSchema = {
  params: zod.object({
    id: zod.string().min(1),
  }),
  bofy: zod.object({
    name: zod.string().min(1),
  }),
};

export const deleteScenarioSchema = {
  params: zod.object({
    id: zod.string().min(1),
  }),
};
