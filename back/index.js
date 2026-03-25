import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server activo escuchando en puerto ${PORT}`),
);

app.get("/", (req, res) => res.send("Todo re bien"));

app.post("/register", (req, res) => {
  const { user, pass } = req.body;
  res.json(req.body);
});
