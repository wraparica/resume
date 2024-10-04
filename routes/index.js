const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

router.get('/index', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

router.get('/resume', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'resume.html'))
})

module.exports = router