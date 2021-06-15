import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  // console.log(plantList)

  const displayPlants = plantList.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })


  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
