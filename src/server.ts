import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const server = createServer(app);

// Part: Configure DB Connection
// TODO:

const PORT: String | undefined = process.env.APP_PORT || "5000";
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

const gracefulShutdown = async () => {
  process.exit();
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
