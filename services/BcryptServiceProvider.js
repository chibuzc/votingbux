const Bcrypt = require('bcrypt');
const SaltRound = 10;


exports.hash = (value) => {
    return Bcrypt.hashSync(value, SaltRound);
}

exports.compare = (hashedValue, plainText) => {
    console.log(hashedValue, plainText);
    return Bcrypt.compareSync(plainText, hashedValue);
};
