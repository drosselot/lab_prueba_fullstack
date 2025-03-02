'use client'
import { getPokemonCard } from "@/utils/api";
import { textFont } from "@/utils/fonts";
import Image from "next/image";
import { use, useEffect, useState } from "react";


export default function Page({params}: {params: Promise<{id: string}>}) {

  const { id } = use(params);

  const [cardDetails, setCardDetails] = useState<PokemonCard>();

  useEffect(() => {
    const getCardDetails = async () => {
      const cardDetails = await getPokemonCard(id);
      setCardDetails(cardDetails);
    }
    getCardDetails();
  }, [id]);

  const bigCardImage = cardDetails?.image?.find((image) => image.type == "large");

  if (!cardDetails) {
    return (<div>Loading</div>)
  }

  return (
    <div className={"shadow-lg rounded-lg p-10 border justify-center m-10 flex flex-row " + textFont.className}>
      <div className="h-[420] w-[300px]">
        {
          bigCardImage ? (
            <Image width={300} height={300} alt={cardDetails.name + " image"} src={bigCardImage.url || ""}/>
          ) : (
            <div className="bg-slate-100 h-full w-full"/>
          )
        }
      </div>
      <div className="h-full pl-10">
        <h1 className="font-semibold text-5xl mb-2">{cardDetails.name} ({cardDetails.number})</h1>
        <p className="text-3xl ">{cardDetails.supertype} - {cardDetails.rarity}</p>
        <p>Subtype: {cardDetails.subtypes}</p>
        <p>Types: {cardDetails.types}</p>
        <h2 className="font-semibold text-4xl mt-10">Market</h2>
        <ul>
          {
            cardDetails.market?.map((market) => (<li className="font-semibold" key={market.id}>- {market.market} <a className="font-normal text-[#3671b6]" href={market.url}>Market Link</a></li>))
          }
          {
            !cardDetails.market?.length || cardDetails.market.length <= 0 && (<p>No market data found</p>)
          }
        </ul>
        <a></a>
      </div>
    </div>
  )
}