import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import api from './api/router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', api)

app.get('/', () => {
    return "worked"
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Serever is running on port: ${port}`);
})




