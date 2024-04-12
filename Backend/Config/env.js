require ('dotenv').config();

const getEnv = (variable, defaultValue) => {
  const value = process.env[variable];
    if (value === undefined) {
        return defaultValue;
    }
    return value;
};


module.exports = {
    port                : getEnv('PORT', 3000),
    dbUrl               : getEnv('DB_URL', 'mongodb+srv://nestarobertnrn99se:Bobysawer23se!@cluster0.zt1epey.mongodb.net/SoundFocus'),
};