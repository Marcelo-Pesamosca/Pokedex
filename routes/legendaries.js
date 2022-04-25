const express =require('express');
const router = express.Router();
const controller = require('../controller/legendariesController');

router.get('/Legendaries', controller.index);
router.post ('/', controller.creat);

module.exports = router; 