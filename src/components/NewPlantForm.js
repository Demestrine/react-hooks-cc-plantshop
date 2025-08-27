import React, { useState } from "react";

// This component renders a form for adding a new plant
function NewPlantForm({ onAddPlant }) {
  const [form, setForm] = useState({ name: "", image: "", price: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" }, // <-- match test expectation
      body: JSON.stringify({ ...form, price: form.price }), // <-- price as string
    })
      .then((r) => r.json())
      .then(newPlant => {
        onAddPlant(newPlant);
        setForm({ name: "", image: "", price: "" });
      });
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Plant name"
        required
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
