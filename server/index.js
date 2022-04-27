const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../client/index.html'))})

app.use(express.static('client'))

// app.get('/css', (req, res) => {res.sendFile(path.join(__dirname, '../index.css'))})

// app.get('/js', (req, res) => {res.sendFile(path.join(__dirname, '../test.js'))})

const port = process.env.PORT || 4006

app.listen(port, () => {console.log(`${port} up & runnin'`)}) 