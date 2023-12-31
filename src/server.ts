import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const { PORT } = process.env;

app.listen(
    PORT,
    () => console.log(`Running on port ${PORT}`)
);