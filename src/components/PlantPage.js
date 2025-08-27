import React, { useEffect, useState } from "react";
import Search from "./Search";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

// This component manages the plant data and handles searching and adding plants
function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;