/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import CardItem from '../CardItem'
import { useTransport } from 'Utils/context'
import { IStarship } from 'Utils/types'

type Props = {
  param: string
}

const Startship = ({ param }: Props) => {
  const [starship, setStarship] = useState<IStarship>()

  const { setName}  = useTransport()

  useEffect(() => {
    if (starship !== undefined) {
      return
    } else {
      fetchStarship(param)
    }
  })

  async function fetchStarship(param: string) {
    const rs = await fetch(`https://swapi.dev/api${param}`)
    const starship = await rs.json() as IStarship
    setStarship(starship)
    setName(starship.name)
  }

  return (
    <>
      <CardItem keyLabel="Model" value={starship?.model} />
      <CardItem keyLabel="Manufacturer" value={starship?.manufacturer} />
      <CardItem keyLabel="Cost in credits" value={starship?.cost_in_credits} />
      <CardItem keyLabel="Length" value={starship?.length} />
      <CardItem keyLabel="Max atmosphering speed" value={starship?.max_atmosphering_speed} />
      <CardItem keyLabel="Crew" value={starship?.crew} />
      <CardItem keyLabel="Passengers" value={starship?.passengers} />
      <CardItem keyLabel="Cargo capacity" value={starship?.cargo_capacity} />
      <CardItem keyLabel="Consumables" value={starship?.consumables} />
      <CardItem keyLabel="starship class" value={starship?.starship_class} />
      <CardItem keyLabel="hyperdrive_rating" value={starship?.hyperdrive_rating} />
      <CardItem keyLabel="MGLT" value={starship?.MGLT} />
    </>
  )
}

export default Startship
