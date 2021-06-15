import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  const handleStock = () => {
    setInStock(!inStock)
  }

  const handleNewPrice = () => {
    console.log("new")
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <input type="number" name="price" step="0.01" placeholder={plant.price} value={newPrice} onChange={handleNewPrice}/>
      {inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
