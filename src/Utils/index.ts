export enum Gener {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

export type T = {
  name: string
  homeworld: string
  gener: Gener
}
