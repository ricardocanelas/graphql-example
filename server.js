// External Depedencies
import express from 'express'
import bodyParser from 'body-parser'

// Our Depedencies
import routes from './routes'
import graphql from './graphql/setup'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)
graphql(app)

app.listen(5000)
