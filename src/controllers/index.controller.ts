import { Request, Response } from "express";
import * as config from "../config";

export const get = (req: Request, res: Response) => {
    return res.render(config.LANDING_PAGE);
};

export const post = (req: Request, res: Response) => {
    return res.send("post request test");
};
