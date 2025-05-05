import type { Prisma } from "../../generated/prisma/client";

export const userPublicSelect: Prisma.UserSelect = {
  id: true,
  username: true,
  email: true,
  avatar: true,
};
