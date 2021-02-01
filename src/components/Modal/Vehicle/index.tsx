/* eslint-disable prettier/prettier */
import React from 'react'
import CardItem from '../CardItem'

const Vehicle = () => {
  const vehicle = {
    name: 'Snowspeeder',
    model: 't-47 airspeeder',
    manufacturer: 'Incom corporation',
    cost_in_credits: 'unknown',
    length: '4.5',
    max_atmosphering_speed: '650',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: 'none',
    vehicle_class: 'airspeeder',
    url: 'http://swapi.dev/api/vehicles/14/'
  }
  return (
    <>
      <CardItem keyLabel="Model" value={vehicle.model} />
      <CardItem keyLabel="Manufacturer" value={vehicle.manufacturer} />
      <CardItem keyLabel="Cost in credits" value={vehicle.cost_in_credits} />
      <CardItem keyLabel="Length" value={vehicle.length} />
      <CardItem keyLabel="Max atmosphering speed" value={vehicle.max_atmosphering_speed} />
      <CardItem keyLabel="Crew" value={vehicle.crew} />
      <CardItem keyLabel="Passengers" value={vehicle.passengers} />
      <CardItem keyLabel="Cargo capacity" value={vehicle.cargo_capacity} />
      <CardItem keyLabel="Consumables" value={vehicle.consumables} />
      <CardItem keyLabel="Vehicle class" value={vehicle.vehicle_class} />
    </>
  )
}

export default Vehicle
