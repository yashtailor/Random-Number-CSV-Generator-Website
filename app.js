var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.listen(process.env.PORT || 3000, function() { 
    console.log('server running on port 3000'); 
} ) 
app.set('view engine','ejs')
// app.get('/generate', callName); 
  
// function callName(req, res) { 

  
//     process.stdout.on('data', function(data) { 
//             const file = 'hiren.csv';
//             res.download(data); // Set disposition and send it.
//     } ) 
    
// } 
app.get('/',function(req,res){
    res.render('index')
})
app.post('/download', function(req, res){
    var name = req.body.filename;
    var rows = req.body.rows;
    var cols = req.body.cols;
    var start = req.body.starting;
    var end = req.body.ending;
    var copies = req.body.number_cps;
    var spawn = require("child_process").spawn; 
    console.log(name,rows,cols,start,end,copies)
    var process = spawn('python',["./strip_generator.py", name+'.csv',copies,rows,cols,start,end] );
    setTimeout((function(){const file = `${__dirname}/tes.csv`;res.download(file,name+'.csv');}),10000);
    //res.redirect('/')
})