const express = require('express')
const path = require('path')
const app = express()
const { products } = require('./data')

app.use(express.static('./navbar-app'))

/*app.get('/', (req,res)=>{
  res.sendFile(path.resolve('./navbar-app/index.html'))
})*/

app.get('*', (req,res)=>{
  res.status(404).send('resource not found')
})

app.listen(8080, ()=> {
  console.log('Server is listening on port 8080..')
})