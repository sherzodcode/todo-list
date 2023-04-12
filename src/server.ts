import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(8080, () => {
    console.log(`Serever is running on port: `);
})