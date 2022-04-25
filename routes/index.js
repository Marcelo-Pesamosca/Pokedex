const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log(req.cookies);
  res.render('index', { title: 'Express'});
});
 router.get('/login', (req, res)=>{
  res.render('login')
 });


router.get('/dark-mode', (req, res) => {
  res.clearCookie('darkMode', !req.cookies.darkMode);
  res.redirect('/');
});

module.exports = router;
