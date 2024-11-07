const path = require('path');
const express = require('express');
const app=express();

app.set('port', process.env.PORT||3000);

//static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
}

);