import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, password } = useQuery(event);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  const success = await bcrypt.compare(password, user.password);

  console.log(success + "asdasd");

  return success ? user : {};
});
