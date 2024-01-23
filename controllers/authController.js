// controllers/authController.js
const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { getUserByUsername } = require('../models/user');
const { secret, expiresIn } = require('../config/jwt');

exports.login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await getUserByUsername(userName);

    if (!user || !compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = sign({ userId: user.id, userName: user.userName }, secret, { expiresIn });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
