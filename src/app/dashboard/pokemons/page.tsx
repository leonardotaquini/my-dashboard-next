import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";


export const metadata = {
 title: 'Pokemons',
 description: 'Pagina de todos los pokemons',
};

const getPokemons = async( limit = 151, offset = 0 ): Promise<SimplePokemon[]> => {
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
    <main className="h-full w-full ">
      <h1 className="text-3xl font-bold text-center my-3">Pokemons</h1>
      <PokemonGrid pokemons={ pokemons } />
    </main>
  );
}