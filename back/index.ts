import express from "express";
import cors from "cors";
import { prisma } from "./prisma/lib/prisma";
import type { User } from "./prisma/generated/prisma/client";

//  import { User } from "./prisma/generated/prisma/client";
// vi que puedo importar el tipo pero no me doy cuenta donde aplicarlo
// creo que lo puse bien igual

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
  console.log(`Server activo escuchando en puerto ${PORT}`),
);

app.get("/", (req, res) => res.send("Todo re bien"));

app.post("/register", async (req, res) => {
  const { email, user, password }: User = req.body;
  const result = await prisma.user.create({
    data: {
      email,
      user,
      password,
    },
  });
  res.json(result);
});

app.post("/login", async (req, res) => {
  //quiero pasarle solo user y pass
  // con findMany pude, con findUnique no
  const { user, password }: User = req.body;
  const result = await prisma.user.findMany({
    //no me doy cuenta donde tipar. marca todo "any"
    where: {
      user: user,
      password: password,
    },
  });
  res.json(result);
});
