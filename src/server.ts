import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const server = createServer(app);

// Part: Configure DB Connection
// TODO:

const PORT: String | undefined = process.env.PORT || "5000";
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
