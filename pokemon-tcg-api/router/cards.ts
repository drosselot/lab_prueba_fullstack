import { Request, Response, Router } from "express";
import prismaClient from "../prisma/client";

const cardsRouter = Router();

cardsRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const cardId = request.params.id;
    const card = await prismaClient.card.findUnique({
      where: {
        id: cardId
      },
      include: {
        market: true,
        image: true,
      }
    });
    if (card) {
      // Custom serialization because of BigInt value. Solution from: https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types#working-with-bigint
      response.status(200).send(
        JSON.stringify(
          card,
          (key, value) => (typeof value === 'bigint' ? value.toString() : value)
        )
      )
      return;
    }

    response.status(404).send();

  } catch (exception) {
    console.log(exception)
    response.status(500).send();
  }
})

export default cardsRouter;