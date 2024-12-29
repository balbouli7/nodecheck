var http= require("http")

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': "text/plain"})
    res.end( '<h1>Hello Node!!!!</h1>')
}).listen(3000)

console.log("runs localhost:3000")