import { Request, Response, Router } from "express";
import prismaClient from "../prisma/client";

const cardsRouter = Router();

cardsRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const cardId = request.params.id;
    const card = await prismaClient.card.findUnique({
      where: {
        id: cardId
      }
    });
    if (card) {
      response.status(200).send(card)
      return;
    }

    response.status(404).send();

  } catch (exception) {
    response.status(500).send();
  }
})

export default cardsRouter;