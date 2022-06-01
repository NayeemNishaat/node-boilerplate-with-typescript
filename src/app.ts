import express, { Request, Response, NextFunction } from "express";
const app = express();
import { AppError } from "./lib/error";
import errorHandler from "./controllers/errorController";

// Part: Parsing body
app.use(express.json());

// Part: Mounting Routes
// TODO:

// Part: Handeling unwanted routes
app.all("*", (req: Request, _res: Response, next: NextFunction) => {
	next(
		new AppError(`This (${req.originalUrl}) route is not available!`, 404)
	);
});

// Part: Handeling error
app.use(errorHandler);

export default app;
