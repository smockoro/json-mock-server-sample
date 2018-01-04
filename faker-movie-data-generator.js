const faker = require('faker');

const db = { movies: [] };
for (let i = 1; i <= 1000; i += 1) {
  db.movies.push({
    id: i,
    name: faker.random.words(),
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    rating: Math.floor((Math.random() * 100) + 1) / 10,
  });
}

console.log(JSON.stringify(db));
