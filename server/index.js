require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const path = require('path')
const app = express()

app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))

app.use(express.static(`${__dirname}/../build`))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})