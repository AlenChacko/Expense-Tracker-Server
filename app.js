import express, { json } from 'express';
import cors from 'cors';
import morgan from "morgan";
import helmet from "helmet";
import connectDatabase from './db/db.js'
import transactions from './routes/transactions.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT

//middlewares
app.use(json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())

//routes
app.use('/api/v1',transactions)


const server = () => {
    connectDatabase()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()