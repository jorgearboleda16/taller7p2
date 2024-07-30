const db = require('./database');

const seedProfiles = () => {
  const profiles = [
    ['Admin', 'activo'],
    ['Supervisor', 'activo'],
    ['Operador', 'activo'],
    ['Cliente', 'activo'],
  ];

  profiles.forEach(profile => {
    db.run('INSERT INTO Perfil (descripcion, estado) VALUES (?, ?)', profile);
  });
};

module.exports = { seedProfiles };