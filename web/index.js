const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Web!'))

app.get('*', (req, res) => res.send('404 from web', 404))

app.listen(3000, () => console.log('Web listening on port 3000!'))