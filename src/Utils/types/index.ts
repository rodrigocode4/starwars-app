export type URL = string

export type Event = {
  target: {
    value: string
  }
}

export type T = {
  name: string
  homeworld: string
  gender: string
}

export type ICharacter = {
  name: string
  height: number
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: URL
  films: Array<URL>
  species: Array<URL>
  vehicles: Array<URL>
  starships: Array<URL>
  created: string
  edited: string
  url: URL
}

export type IPlanet = {
  name: string
  rotation_period: number
  orbital_period: number
  diameter: number
  climate: string
  gravity: string
  terrain: string
  surface_water: number
  population: number
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export interface SearchResponseCharacter {
  count: number
  next: URL
  previous: URL
  results: Array<ICharacter | undefined>
}

export interface Character {
  name: string
  gender: string
  homeworld: URL
  url: URL
}

export type IVehicle = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: number
  length: number
  max_atmosphering_speed: number
  crew: number
  passengers: number
  cargo_capacity: number
  consumables: string
  vehicle_class: string
  pilots: Array<unknown | undefined>
  films: Array<string | undefined>
  created: string
  edited: string
  url: string
}

export type IStarship = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: Array<unknown>
  films: Array<string>
  created: string
  edited: string
  url: string
}
