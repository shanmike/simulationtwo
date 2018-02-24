const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive');

const connectionString = 'postgres://jbzddlzfpqeoql:6be2b5ee6238e90ad4aee29ed8a1a16d6ad9ecdf574b9ac105a0068c136a04b6@ec2-107-20-249-48.compute-1.amazonaws.com:5432/dfhi6k59vt1tuj?ssl=true'

const app = express();
app.use(bodyParser.json());

const port = 3005;

app.get('/', (req,res)=>{
    const db = req.app.get('db');
    console.log('Server get Worked')
    db.getProperties().then(properties=> {
        res.send(properties);
    })
});

massive(connectionString).then(db => {
    app.set('db', db);
    app.listen(port, ()=>{
        console.log('Let it jive on', port)
    })
})