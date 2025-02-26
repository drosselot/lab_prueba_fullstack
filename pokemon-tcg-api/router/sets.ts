import { Request, Response, Router } from "express";
import prismaClient from "../prisma/client";


const setsRouter = Router();

setsRouter.get("/", async (request: Request, response: Response) => {
  try {
    const setList = await prismaClient.set.findMany();

    if (setList) {
      response.status(200).send(setList)
      return;
    }

    response.status(404).send();
  } catch (exception) {
    response.status(500).send();
  }
})

setsRouter.get("/:id/cards", async (request: Request, response: Response) => {
  try {
    const setId = request.params.id;

    const set = await prismaClient.set.findUnique({
      where: {
        id: setId,
      },
      include: {
        card: true,
      }
    });

    if (set) {
      response.status(200).send(set);
      return;
    }

    response.status(404).send();
  } catch (exception) {
    response.status(500).send();
  }
})

export default setsRouter;