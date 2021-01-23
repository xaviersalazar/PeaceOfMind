import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
