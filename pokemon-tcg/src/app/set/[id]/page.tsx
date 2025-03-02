'use client'
import PokemonCard from "@/components/poekmonCard";
import { getPokemonSetCards, getPokemonSets } from "@/utils/api";
import { textFont } from "@/utils/fonts";
import { formatDate } from "@/utils/formatters";
import Image from "next/image";
import { ReactNode, Suspense, use, useEffect, useState } from "react";

export default function Page({params}: {params: Promise<{id: string}>}) {
  const { id } = use(params);

  const [pokemonSets, setPokemonSets] = useState<PokemonSet[]>([])
  const [pokemonSetCards, setPokemonSetCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPokemonSets = await getPokemonSets();
      setPokemonSets(fetchedPokemonSets);

      const fetchedPokemonSetCards = await getPokemonSetCards(id);
      setPokemonSetCards(fetchedPokemonSetCards);
    }
    fetchData()
  }, [id])

  const pokemonSet = pokemonSets.find((set) => id == set.id );
  const releaseDate = formatDate(pokemonSet?.release_date);

  if (!pokemonSet) {
    return (<div><p>Ha ocurrido un error</p></div>)
  }

  return (
    <div className={textFont.className}>
      <div className="flex w-full justify-center content-center mt-16">
        <Suspense fallback={<div></div>}>
          <Image width={300} height={300} alt={pokemonSet.name + " logo"} src={pokemonSet.logo_url || ""}/>
        </Suspense>
      </div>
      <HeaderRow>
          <div className="flex flex-row">
            <Image width={40} height={40} alt={pokemonSet.name + " symbol"} src={pokemonSet.symbol_url || ""}/>
            <p className="text-3xl text-center font-semibold ml-3">{pokemonSet.name} [{pokemonSet.ptcgo_code}]</p>
          </div>
          <p className="text-2xl">{pokemonSet.series}</p>
      </HeaderRow>
      <HeaderRow>
        <HeaderInfo infoKey="Printed Total" info={String(pokemonSet.printed_total)} />
        <HeaderInfo infoKey="Total" info={String(pokemonSet.total)} />
        <HeaderInfo infoKey="Release date" info={releaseDate}/>
      </HeaderRow>
      <div className="flex flex-row flex-wrap w-window m-10 justify-center">
        {
          pokemonSetCards.map((pokemonCard) => (
            <Suspense key={pokemonCard.id}>
              <PokemonCard card={pokemonCard}/>
            </Suspense>
          ))
        }
      </div>
    </div>
  )

}

const HeaderRow = (props: {children: ReactNode}) => {
  return (
    <div className="flex m-10 flex-row items-center justify-evenly">
      {props.children}
    </div>
  )
}

const HeaderInfo = (props: {infoKey: string, info: string | undefined}) => {
  const {infoKey, info} = props;
  return (
    <p><span className="font-semibold">{infoKey}:</span> {info || "--"}</p>
  )
}