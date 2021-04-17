const { Router } = require('express');
const router = Router();

const { getPersonajes, getGames, welcome } = require('../controllers/controller.js');

router.get('/', welcome );
router.get('/games', getGames);
router.get('/brawlers_legendarios', getPersonajes);


module.exports = router;