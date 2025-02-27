import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1414";

const getPokemonSets = async () => {
  const getSetsResponse = await axios.get<PokemonSet[]>(`${baseUrl}/sets`);
  return getSetsResponse.data;
}

const getPokemonSetCards = async (setId: string) => {
  const getCardsResponse = await axios.get<PokemonCard[]>(`${baseUrl}/sets/${setId}/cards`);
  return getCardsResponse.data;
}

const getPokemonCard = async (cardId: string) => {
  const getCardResponse = await axios.get<PokemonCard>(`${baseUrl}/cards/${cardId}`);
  return getCardResponse.data;
}

export {
  getPokemonSets,
  getPokemonSetCards,
  getPokemonCard
}