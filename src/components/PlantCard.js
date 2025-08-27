import React, { useState } from "react";

// This component displays a single plant's information and allows marking as sold out
function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  function handleSoldOut() {
    setSoldOut(true);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;