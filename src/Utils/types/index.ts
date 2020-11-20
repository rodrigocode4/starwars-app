type URL = string

export interface Character {
  name: string
  gender: string
  homeworld: URL
  url: URL
}

export type Event = {
  target: {
    value: string
  }
}
