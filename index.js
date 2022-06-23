const express = require('express')
const { create } = require('express-handlebars')
const mongoose = require('mongoose');
const { all } = require('./routes/allRouter');
const db = require('./helper/db')()
const path = require('path')

const app = express();
const hbs = create({
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const allRouter = require('./routes/allRouter')

app.use('/', allRouter)



const port = normalizePort(process.env.port || 8000)
const host = 'localhost'

try {
    app.listen(port, host, () => {
        console.log(`${host}:${port} bilan ishlayapti`);
    })
} catch (error) {
    console.log(error);
}

function normalizePort(port) {
    const num = parseInt(port)
    if (isNaN(num)) {
        return port
    } else if (num >= 0) {
        return num
    }
    return false
}