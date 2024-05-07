import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function HomePage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  async function getAnimals() {
    const response = await fetch(
      "https://assessment-week7-uk-animal-adoption.onrender.com/animals"
    );
    // const response = await fetch("http://localhost:8080/animals");

    const data = await response.json();
    setAnimals(data);
    // console.log(data);
  }

  return (
    <>
      <h2>Come and take a look at our animals </h2>
      <div className="grid-container">
        {animals.map((animal) => {
          return (
            <div key={animal.id} className="grid-item">
              <h2>
                {animal.type === "dog"
                  ? "Woof-woof"
                  : animal.type === "cat"
                  ? "Meow"
                  : animal.type === "bird"
                  ? "Chirp"
                  : animal.type === "rabbit"
                  ? "Squeak"
                  : animal.type === "rat"
                  ? "Squeak"
                  : animal.type === "mouse"
                  ? "Squeak"
                  : animal.type === "ferret"
                  ? "Squeak"
                  : animal.type === "hamster"
                  ? "Squeak"
                  : animal.type === "gerbil"
                  ? "Squeak"
                  : animal.type === "chinchilla"
                  ? "Squeak"
                  : animal.type === "bird"
                  ? "Chirp"
                  : animal.type === "pig"
                  ? "Oink"
                  : animal.type === "horse"
                  ? "neigh"
                  : "Hi"}
                ... my name is {animal.name}{" "}
              </h2>
              <p>
                I am {animal.age} years old. I am a {animal.colour}{" "}
                {animal.breed} {animal.type}.
              </p>
              <p>{animal.date_added}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
