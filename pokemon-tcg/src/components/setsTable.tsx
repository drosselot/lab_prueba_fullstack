'use client'
import { getPokemonSets } from "@/utils/api";
import { useEffect, useState } from "react";


const SetsTable = () => {
  const [pokemonSets, setPokemonSets] = useState<PokemonSet[]>([])

  useEffect(() => {
    const getSetsData = async () => {
      const fetchedPokemonSets = await getPokemonSets();
      setPokemonSets(fetchedPokemonSets);
    }

    getSetsData();
  })

  return (
    <div className="flex flex-col m-10">
      {
        pokemonSets.map((set) => (
          <div key={set.id} className="flex flex-row bg-slate-100">
            <p>{set.name}</p>
            <p>{set.series}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SetsTable;