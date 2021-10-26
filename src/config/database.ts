const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let db: any;

export async function createConnection() {
  const adapter = new FileAsync("db.json");
  db = await low(adapter);
  db.defaults({ todos: [] }).write();
}

export const getConnection = () => db;
