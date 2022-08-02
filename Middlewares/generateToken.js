const crypto = require('crypto');

function generateToken(req, res, next) {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
  next();
}

module.exports = generateToken;