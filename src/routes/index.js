const { Router } = require('express');
const router = Router();

const { getGames, welcome } = require('../controllers/controller.js');

router.get('/', welcome );
router.get('/games', getGames);

module.exports = router;