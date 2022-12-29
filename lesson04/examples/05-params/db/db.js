const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); // v4 won't work in CommonJS

const dbPath = path.resolve(__dirname, "db.json");

async function readDb() {
  const dbRaw = await fs.readFile(dbPath);
  const db = JSON.parse(dbRaw);
  return db;
}

async function writeDB(db) {
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
}

async function addMovie(title) {
  const id = nanoid();
  const todo = { id, title };

  const db = await readDb();
  db.push(todo);

  await writeDB(db);
}

async function removeMovie(id) {
  const db = await readDb();
  const updatedDb = db.filter((todo) => todo.id !== id);
  await writeDB(updatedDb);
}

async function listMovies() {
  const db = await readDb();
  return db;
}

async function getMovie(id) {
  const db = await readDb();
  const movie = db.find((m) => m.id === id);

  return movie || null;
}

module.exports = {
  addMovie,
  removeMovie,
  listMovies,
  getMovie,
};
