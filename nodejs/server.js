const http = require('http')

http.createServer( (req, res)=> {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // Send the response body as "Hello World"
    res.end(<h1>Hello World\n</h1>);
 }).listen(3000);
 
 // Console will print the message
 