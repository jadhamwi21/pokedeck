export interface PokemonObject {
	name: string;
	url: string;
}
export interface PokemonsURLResponseInterface {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonObject[];
}
