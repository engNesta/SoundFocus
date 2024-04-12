// config/db.js
const mongoose = require('mongoose');
const { dbUrl } = require('./env');

const configureDb = () => { 
    mongoose.connect(dbUrl)
        .then(() => console.log('Connected to MongoDB successfully.'))
        .catch(err => console.error('MongoDB connection error:', err));

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = configureDb;
