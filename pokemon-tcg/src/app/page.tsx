'use client'
import SetsList from "@/components/setsList";
import { getPokemonSets } from "@/utils/api";
import { mainTitleFont } from "@/utils/fonts";
import { useEffect, useState } from "react";

export default function Home() {

  const [pokemonSets, setPokemonSets] = useState<PokemonSet[]>([])

  useEffect(() => {
    const fetchPokemonSets = async () => {
      const fetchedPokemonSets = await getPokemonSets();
      setPokemonSets(fetchedPokemonSets);
    }

    fetchPokemonSets();

  }, [])


  return (
    <div>
      <h1 className={"w-full text-center mt-16 text-5xl text-[#ffcd0d] [text-shadow:_4px_4px_#3671b6] " + mainTitleFont.className}>Pokemon TCG App</h1>
      <SetsList sets={pokemonSets}/>
    </div>
  );
}
