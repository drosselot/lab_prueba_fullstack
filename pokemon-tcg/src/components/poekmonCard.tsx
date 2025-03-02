'use client'
import { getPokemonCard } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function PokemonCard (props: {card: PokemonCard}) {
  const {card} = props;

  const [smallImage, setSmallImage] = useState<PokemonImage>()

  useEffect(() => {
    const getCardDetails = async () => {
      const cardDetails = await getPokemonCard(card.id);
      setSmallImage(cardDetails.image?.find((image) => image.type == "small"));
    }
    getCardDetails();
  }, [card.id])


  return (
    <Link href={"/card/" + card.id} className="m-1 shadow-md hover:shadow-xl p-2 rounded-lg">
      <div className="h-[210px] w-[150px]">
        {
          smallImage ? (
            <Image width={150} height={150} alt={card.name + " image"} src={smallImage.url || ""}/>
          ) : (
            <div className="bg-slate-100 h-full w-full"/>
          )
        }
      </div>
    </Link>
  )
}