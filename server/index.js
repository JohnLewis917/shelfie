require('dotenv').config()
const express = require('express')
const{SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const massive = require('massive')

const app = express()

app.use(express.json())

app.get('/api/Dashboard', ctrl.getInventory)
app.post('/api/Dashboard', ctrl.addInventory)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database connected')
}),
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} dollars in ma pocket`))