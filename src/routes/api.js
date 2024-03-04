const express = require('express');
const router = express.Router();
const { handleRoot  } = require('../controllers/RootController');





router.get('/', handleRoot);

module.exports = router;