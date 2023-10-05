import express from 'express'

const app: express.Application = express()

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Hello world')
})

app.listen(8080, () => {
  console.log('Listening 8080')
})
