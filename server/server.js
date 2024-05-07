import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("root rot route");
});

// select the animals for the Home Page
app.get("/animals", async (request, response) => {
  const result = await db.query(`SELECT
    animals.id,
    animals.name,
    animals.age,
    animals.colour,
    animals.breed,
    animals.date_added,
    animals.type
     from animals
     ORDER BY
      date_added DESC`);
  response.json(result.rows);
});

// app.post("/animal", async (request, response) => {
//   response.json("root rot route");
// });

app.post("/animal", async (request, response) => {
  const name = request.body.name;
  const age = request.body.age;
  const colour = request.body.colour;
  const breed = request.body.breed;
  const type = request.body.type;

  db.query(
    `INSERT INTO animals (name, age, colour, breed, type) VALUES ($1, $2, $3, $4, $5)`,
    [name, age, colour, breed, type]
  );
  response.json({ success: true });
});

app.listen(8080, () => console.log("Running on port 8080"));
