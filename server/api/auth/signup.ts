import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;

export default defineEventHandler(async (event) => {
  const { email, password } = useQuery(event);

  const hashpass = await bcrypt.hash(password, saltRounds);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashpass,
    },
  });
});
