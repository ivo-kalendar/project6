const express = require('express')
const router = express.Router()

const path = require('path')
const home = path.join(__dirname + '/../views/home.html')

router.get('/', (req,res) => res.render('index'))
router.get('/home', (req,res) => res.sendFile(home))

module.exports = router