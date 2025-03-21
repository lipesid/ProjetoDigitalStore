const {Router} = require('express');
const auth = require('../middears/auth');

const router = Router();

router.use(auth);

module.exports = router;