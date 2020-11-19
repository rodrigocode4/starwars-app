import React from 'react'

export const FunctionContext = React.createContext(Function())

type URL = string

export interface Character {
  name: string
  gender: string
  homeworld: URL
  url: URL
}

export const data: Array<Character> = [
  {
    name: '',
    gender: '',
    homeworld: '',
    url: ''
  }
]

export type Event = {
  target: {
    value: string
  }
}

export const CharacterContext = React.createContext(data)
