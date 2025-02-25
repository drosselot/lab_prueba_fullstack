import { Request, Response, Router } from "express";


const setsRouter = Router();

setsRouter.get("/", async (request: Request, response: Response) => {
  try {
    response.status(200).send([]);
  } catch (exception) {
    console.log(exception);
  }
})

export default setsRouter;