import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";


interface PokemonGridProps {
    pokemons: SimplePokemon[];
    }

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="flex flex-wrap justify-around items-center space-y-2">
    { pokemons.map( pokemon => (
      <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
    ))}
  </div>
  )
}
