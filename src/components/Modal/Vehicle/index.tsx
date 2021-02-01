/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useTransport } from 'Utils/context'
import { IVehicle } from 'Utils/types'
import CardItem from '../CardItem'

type Props = {
  param: string
}

const Vehicle = ({param}: Props) => {

  const [vehicle, setVehicle] = useState<IVehicle>()
  const {setName} = useTransport()

  useEffect(() => {
    if (vehicle !== undefined) {
      return
    } else {
      fetchVehicle(param)
    }
  })

  async function fetchVehicle(param: string) {
    const rs = await fetch(`https://swapi.dev/api${param}`)
    const vehicle = await rs.json() as IVehicle
    setVehicle(vehicle)
    setName(vehicle.name)
  }
  return (
    <>
      <CardItem keyLabel="Model" value={vehicle?.model} />
      <CardItem keyLabel="Manufacturer" value={vehicle?.manufacturer} />
      <CardItem keyLabel="Cost in credits" value={vehicle?.cost_in_credits} />
      <CardItem keyLabel="Length" value={vehicle?.length} />
      <CardItem keyLabel="Max atmosphering speed" value={vehicle?.max_atmosphering_speed} />
      <CardItem keyLabel="Crew" value={vehicle?.crew} />
      <CardItem keyLabel="Passengers" value={vehicle?.passengers} />
      <CardItem keyLabel="Cargo capacity" value={vehicle?.cargo_capacity} />
      <CardItem keyLabel="Consumables" value={vehicle?.consumables} />
      <CardItem keyLabel="Vehicle class" value={vehicle?.vehicle_class} />
    </>
  )
}

export default Vehicle
