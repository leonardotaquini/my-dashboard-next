import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";
import Image from "next/image";



const getPokemons = async( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then( response => response.json() );
    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
        url: pokemon.url
      })
    );
    return pokemons;
}


export default async function PokemonsPage() {

const pokemons = await getPokemons();

  return (
    <main className="h-full w-full grid place-items-center">
      <h1 className="text-3xl font-bold text-center my-3">Pokemons</h1>
      <PokemonGrid pokemons={ pokemons } />
    </main>
  );
}