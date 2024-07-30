const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE Usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT,
    nombre TEXT,
    apellido TEXT,
    id_perfil INTEGER,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id)
  )`);

  db.run(`CREATE TABLE Perfil (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descripcion TEXT,
    estado TEXT
  )`);
});

module.exports = db;