const express = require('express');
const db = require('./database');
const router = express.Router();

router.get('/perfiles', (req, res) => {
  db.all('SELECT * FROM Perfil', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

router.post('/usuarios', (req, res) => {
  const { usuario, nombre, apellido, id_perfil } = req.body;
  db.run('INSERT INTO Usuarios (usuario, nombre, apellido, id_perfil) VALUES (?, ?, ?, ?)',
    [usuario, nombre, apellido, id_perfil],
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json({ id: this.lastID });
      }
    });
});

router.get('/usuarios', (req, res) => {
  db.all(`SELECT Usuarios.*, Perfil.descripcion AS perfil_descripcion FROM Usuarios
          JOIN Perfil ON Usuarios.id_perfil = Perfil.id`, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;