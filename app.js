const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{

    
    try {
        
        fs.readFile('./test.json','utf-8',(err,response)=>{
            const data = JSON.parse(response);

            res.render('index',{data:data});
        });
        
    } catch (error) {
        console.log(error);
    }
    

    
    

    
})

app.listen(8000,()=>{
    console.log("Listening to port 8000");
})