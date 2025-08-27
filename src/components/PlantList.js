import React from "react";
import PlantCard from "./PlantCard";

// This component renders a list of PlantCard components
function PlantList({ plants, setPlants }) {
  return (
    <ul className="plants-list">
      {/* Map over plants and render a PlantCard for each */}
      {plants.map(plant => (
        <PlantCard
          key={plant.id} // <-- unique key
          plant={plant}
          setPlants={setPlants}
        />
      ))}
    </ul>
  );
}

export default PlantList;
