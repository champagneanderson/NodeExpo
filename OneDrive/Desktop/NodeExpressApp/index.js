const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.use((req, res) => {
  res.status(404).send('404: Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})