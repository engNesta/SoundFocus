const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    spotifyId: {type: String, required: true, unique: true},
    accessTokens: {type: String, required: true},
    refreshToken: {type: String, required: true},
    hearingProfile: [{
        frequency: {type: Number, required: true},
        level: {type: Number, required: true}
    }]
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;