const express = require('express');
require('dotenv').config();
let app = express();

//! Used to accept json data from the body.
app.use(express.json())

//! Require teacher.routes.js (All the http routes)
const teacherRoutes = require('./routes/teacher.routes')


//! Connection Require (Mongooes Conection)
require('./adapter/connectionDB');


app.use('/api/teacher', teacherRoutes) 
// (default starting URL localhost:500/api/teacher)


//! Page Not Found
app.use('*', (req, res, next) => [
    res.status(404).send({ message: 'Page not found' })
])


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})