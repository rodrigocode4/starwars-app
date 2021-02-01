/* eslint-disable prettier/prettier */
import React from 'react'
import CardItem from '../CardItem'

const Startship = () => {
  const starship = {
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    starship_class: 'landing craft',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    url: 'http://swapi.dev/api/starships/5/'
  }
  return (
    <>
      <CardItem keyLabel="Model" value={starship.model} />
      <CardItem keyLabel="Manufacturer" value={starship.manufacturer} />
      <CardItem keyLabel="Cost in credits" value={starship.cost_in_credits} />
      <CardItem keyLabel="Length" value={starship.length} />
      <CardItem keyLabel="Max atmosphering speed" value={starship.max_atmosphering_speed} />
      <CardItem keyLabel="Crew" value={starship.crew} />
      <CardItem keyLabel="Passengers" value={starship.passengers} />
      <CardItem keyLabel="Cargo capacity" value={starship.cargo_capacity} />
      <CardItem keyLabel="Consumables" value={starship.consumables} />
      <CardItem keyLabel="starship class" value={starship.starship_class} />
      <CardItem keyLabel="hyperdrive_rating" value={starship.hyperdrive_rating} />
      <CardItem keyLabel="MGLT" value={starship.MGLT} />
    </>
  )
}

export default Startship
