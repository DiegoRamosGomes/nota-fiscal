import express, {Express} from 'express'
import routes from './routes'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string = process.env.PORT as string

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log('⚡️[server]: Server is running')
})