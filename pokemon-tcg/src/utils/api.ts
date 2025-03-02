const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1414";

const getPokemonSets = async (): Promise<PokemonSet[]> => {
  try {
    const getSetsResponse = await fetch(`${baseUrl}/sets`);
    const pokemonSets = await getSetsResponse.json();
    return pokemonSets;
  } catch (error) {
    console.log(error);
    return []
  }
}

const getPokemonSetCards = async (setId: string): Promise<PokemonCard[]> => {
  const getCardsResponse = await fetch(`${baseUrl}/sets/${setId}/cards`);
  const pokemonSetCards = await getCardsResponse.json();
  return pokemonSetCards;
}

const getPokemonCard = async (cardId: string): Promise<PokemonCard> => {
  const getCardResponse = await fetch(`${baseUrl}/cards/${cardId}`);
  const pokemonCard = await getCardResponse.json();
  return pokemonCard;
}

export {
  getPokemonSets,
  getPokemonSetCards,
  getPokemonCard
}