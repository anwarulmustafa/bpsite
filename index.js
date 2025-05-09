//import the express module
const express = require('express');
//import the path module to handle file paths
const path = require('path');
//creat an instance of express app
const app = express();
//define a port 
const PORT = process.env.port || 3000;
//middleware to parse url data in our case form data submission
app.use(express.urlencoded({extended:true}));
//middleware to parse the JSON data (for API, AJAX)
app.use(express.json());
//Server static file from server e.g. css, html and js.
app.use(express.static(path.join(__dirname,'public')));

//route for the /api/contact
const contactRoute = require('./routes/contact');
app.use('/api', contactRoute); // this makes /api/contact available

//
//Route for the home page (index.html)
app.get('/', (req, res)=> {
res.sendFile(path.join(__dirname,'public','index.html'));
});

//Route for the Contact us page
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
});



//start the server and listen at port
app.listen(PORT, ()=>{

    console.log(`🚀 Server running at ${PORT}`);
});


