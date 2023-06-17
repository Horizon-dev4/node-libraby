const express = require("express")
const app = express()
const port = 3001;
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`)
})

