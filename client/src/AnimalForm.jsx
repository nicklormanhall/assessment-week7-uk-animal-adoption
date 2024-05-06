import { useState } from "react";

export default function AnimalForm() {
  const [form, setForm] = useState({
    name: "",
    age: 0,
    colour: "",
    breed: "",
    type: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/animal", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new animal to be rehomed</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" placeholder="Name" onChange={handleChange} />

      <label htmlFor="age">Age:</label>
      <input id="age" name="age" placeholder="Age" onChange={handleChange} />

      <label htmlFor="colour">Colour:</label>
      <input
        id="colour"
        name="colour"
        placeholder="Colour"
        onChange={handleChange}
      />

      <label htmlFor="breed">Breed:</label>
      <input
        id="breed"
        name="breed"
        placeholder="Breed"
        onChange={handleChange}
      />

      {/* Changed the type from an int to varchar as I wasn't able to get the junction insert to work  */}

      <label htmlFor="type">Type:</label>
      <select id="type" name="type" onChange={handleChange}>
        <option value="">Select a type</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="bird">Bird</option>
        <option value="rabbit">Rabbit</option>
        <option value="hamster">Hamster</option>
        <option value="guinea pig">Guinea Pig</option>
        <option value="fish">Fish</option>
        <option value="turtle">Turtle</option>
        <option value="snake">Snake</option>
        <option value="lizard">Lizard</option>
        <option value="ferret">Ferret</option>
        <option value="horse">Horse</option>
        <option value="pig">Pig</option>
        <option value="chinchilla">Chinchilla</option>
        <option value="gerbil">Gerbil</option>
        <option value="parrot">Parrot</option>
        <option value="mouse">Mouse</option>
        <option value="rat">Rat</option>
        <option value="hedgehog">Hedgehog</option>
      </select>

      <button>Add animal</button>
    </form>
  );
}
