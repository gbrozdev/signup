var express = require('express');
var router = express.Router();
var db = require('../connection')
var fun = require('../functions')


/* GET users listing. */

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/signup',(req,res)=>{
  res.render('signup')
})
router.post('/signup',(req,res)=>{
  fun.doSignup(req.body).then((user)=>{
    console.log(user);
    res.render('index',{user})
  })

})
router.get('/login',  function(req, res) {
  res.render('login');
});

router.get('/logout',  function(req, res) {
  res.redirect('/users/login');
});

router.post('/login',(req,res)=>{
  fun.doLogin(req.body).then((response)=>{
    console.log(response.user);
    let user = response.user
    res.render('index',{user})
  })
})

module.exports = router;