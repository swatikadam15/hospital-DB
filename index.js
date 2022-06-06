const express = require('express');
const app = express();
const cors=require('cors')
var bodyParser = require('body-parser');


app.use(cors());
app.use(express.json());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended: true
}));
const port = 3000;

app.listen(port,()=>{
    console.log(`started on PORT ${port}`)
})

app.use('/api/appointment',require('./router/book_appointment'))
// app.use('/api/appointment/:id',require('./router/book_appointment'))
