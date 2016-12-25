//make a new variable  and  call node  function require to  load  the  module
var express = require('express');
// now  i  have accress to the  entire express api

// now we  make  out  application
var app = express();

// app.use let you add functionality to your express application
// express.static let you specify the folder name  that we  are going to expose to the web server
app.use(express.static('public'));
app.listen(3000, function(){
console.log('express server is up and running  on port 3000');
});
