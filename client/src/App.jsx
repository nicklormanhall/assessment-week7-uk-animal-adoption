import { useEffect, useState } from "react";
import AnimalForm from "./AnimalForm";

export default function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  async function getAnimals() {
    const response = await fetch("http://localhost:8080/animals");
    const data = await response.json();
    setAnimals(data);
    console.log(data);
  }
  return (
    <div>
      <h1>Have a look at our animals that need a forever home</h1>
      {animals.map((animal) => {
        return (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <p>{animal.age}</p>
            <p>{animal.colour}</p>
            <p>{animal.breed}</p>
            <p>{animal.date_added}</p>
            <p>{animal.type}</p>
          </div>
        );
      })}
      <AnimalForm></AnimalForm>
    </div>
  );
}
