// const DatabaseSeeder = require('./services/DatabaseSeeder');
const mongoose = require('mongoose')
// const mongoDBUrl ='mongodb://localhost:27017/votingbux';
mongoose.connect(mongoDBUrl, () =>{console.log('mongo connected')})

// const databaseSeeder = new DatabaseSeeder();

// const response = databaseSeeder.seedUsers();

// console.log(response);