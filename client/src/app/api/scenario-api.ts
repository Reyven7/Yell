import api from "./api";

const BASE_URL = "http://localhost:3000/api/scenario";

export const getNameOfScenarios = async () => {
  const res = await api.get(`${BASE_URL}/`);
  return res.data;
};

export const updateScenarioName = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  await api.put(`${BASE_URL}/rename/${id}`, { name });
};

export const createScenario = async (name: string) => {
  await api.post(`${BASE_URL}/`, { name });
};

export const deleteScenario = async (id: string) => {
  await api.delete(`${BASE_URL}/${id}`);
};
