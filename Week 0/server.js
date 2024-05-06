const http = require("http");

const server = http.createServer((req, res)=>{
    if (req.url ==="/")
        res.write("<h1>Home page!</h1>");
    else if (req.url ==="/about")
        res.write("<h1>About!</h1>");
    res.end();
});

server.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});



