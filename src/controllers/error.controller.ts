import { NextFunction, Request, Response } from "express";
import * as config from "../config";

export const errorNotFound = (req: Request, res: Response) => {
    return res.status(404).render(config.NOT_FOUND);
};

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = (!res.statusCode || res.statusCode === 200) ? 500 : res.statusCode;
    const errorMessage = err.message || "An error has occured. Re-routing to the error screen";

    console.log(statusCode, errorMessage);
    res.status(statusCode).send(errorMessage);
};
