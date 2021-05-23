import express from 'express'
import projects from './projectsRoute'
import signin from './auth'
import path from 'path'
import { urlencoded, json } from 'body-parser'

const app = express()
const distPath = path.join(__dirname, '/dist')

// Bodyparser middleware
app.use(
  urlencoded({
    extended: false
  })
)
app.use(json())

// Routes
app.use('/api/projects', projects)
app.use('/api/auth', signin)

// React Route
app.use(express.static(distPath))
  .get('*', (_, res) => {
    res.sendFile('./client/dist/index.html', {
      root: distPath
    })
  })

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
