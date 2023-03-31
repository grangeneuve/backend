const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/json", (req, res) => {
  const inputData = req.body;
  const responseData = {
    message: "Données reçues avec succès !",
    data: inputData,
  };
  res.json(responseData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API en écoute sur le port ${port}`);
});
