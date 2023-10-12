import express from 'express'
import dotenv from 'dotenv'

dotenv.config({path: ".env"});

const app: express.Application = express()
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Server is started on ${process.env.SERVER}:${app.get("port")}`)
})
