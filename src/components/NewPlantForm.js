import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  let handleName = (e) => {
    setName(e.target.value)
  }

  let handleImage = (e) => {
    setImage(e.target.value)
  }

  let handlePrice = (e) => {
    setPrice(e.target.value)
  }

  let handleForm = (e) => {
    e.preventDefault()
    let plantObj = {
      name: name,
      image: image,
      price: price
    }
    addNewPlant(plantObj)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
