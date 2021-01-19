require('dotenv').config()
require('express-group-routes')

const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT

import authentication from './middleware/authentication'

app.use(cors())

app.group('/api/v1', (router) => {
    router.get('/test', authentication.validateKey, (req, res) => {
        res.json({
            message: 'Hello World!'
        })
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})



