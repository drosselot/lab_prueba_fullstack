

type PokemonCard = {
  id: string,
  name: string,
  supertype: string,
  subtypes: string[],
  types: string[],
  set_id: string,
  number: string,
  rarity?: string,
  set?: PokemonSet,
  image?: PokemonImage[],
  market?: PokemonMarket[]
}

type PokemonSet = {
  id: string,
  name: string,
  series: string,
  printed_total?: number,
  total?: number,
  ptcgo_code?: string,
  release_date?: string,
  updated_at?: string,
  symbol_url?: string,
  logo_url?: string,
  card?: PokemonCard[]
}

type PokemonImage = {
  id: number,
  card_id: string,
  url: string,
  type: string,
  card?: PokemonCard
}

type PokemonMarket = {
  id: number,
  card_id: string,
  url: string,
  updated_at: string,
  market: string,
  card?: PokemonCard
}

