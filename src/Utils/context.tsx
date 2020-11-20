import React from 'react'
import { Character } from 'Utils/types'

export const FunctionContext = React.createContext(Function())

export const data: Array<Character> = [
  {
    name: '',
    gender: '',
    homeworld: '',
    url: ''
  }
]

export const CharacterContext = React.createContext(data)
