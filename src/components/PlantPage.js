import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")
  const [filteredPlants, setFilteredPlants] = useState([])

  function addNewPlant(plantObj) {
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plantObj)
    })
    .then(res => res.json())
    .then(data => {
      let newArray = [...plantList, data]
      setPlantList(newArray)
    })
  }

  function handleSearch(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  
  useEffect(() => {
    let newArray = plantList.filter(plant => plant.name.toUpperCase().includes(search.toUpperCase()))
    setFilteredPlants(newArray)
  }, [search])
  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlantList(data))
  }, [])

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList plantList={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
