import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { prisma } from "./prisma/lib/prisma";
import type { User } from "./prisma/generated/prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.listen(PORT, () =>
  console.log(`Server activo escuchando en puerto ${PORT}`),
);

app.post("/register", async (req, res) => {
  const { email, user, password } = req.body;
  if (
    typeof email != "string" ||
    typeof user != "string" ||
    typeof password != "string"
  ) {
    return res.status(400).send("bad request");
  }

  const result = await prisma.user.create({
    data: {
      email,
      user,
      password,
    },
  });
  console.log(`- Registrado exitosamente usuario: "${user}"`);

  res.json(result);
});

app.post("/delete", async (req, res) => {
  //cambiar y validar
  const { email, user, password }: User = req.body;
  const result = await prisma.user.delete({
    where: {
      email,
      user,
      password,
    },
  });
  console.log(`- Eliminado exitosamente usuario: "${user}"`);

  res.json(result);
});

app.post("/login", async (req, res) => {
  const { user, password } = req.body;
  if (typeof user != "string" || typeof password != "string") {
    return res.status(400).send("bad request");
  }
  const token = jwt.sign({ user }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
  });
  const result = await prisma.user.findUnique({
    where: {
      user: user,
      password: password,
    },
  });
  console.log(`- Logueado exitosamente usuario: "${user}"`);
  if (result) {
    res
      .cookie("pkmn_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      })
      .json("Usuario encontrado. Login exitoso");
  } else {
    res.status(401).json("Credenciales inválidas");
  }
});
