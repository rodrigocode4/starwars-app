import { URL } from 'Utils/types/index'

export enum Gener {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

export type T = {
  name: string
  homeworld: string
  gender: string
}

export interface Character {
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

export interface SearchResponseCharacter {
  count: number
  next: URL
  previous: URL
  results: Array<Character | undefined>
}
