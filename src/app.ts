import express, { NextFunction, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";

const app: express.Application = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (_req, _res) => {
    _res.send('Hello world!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

export default app;