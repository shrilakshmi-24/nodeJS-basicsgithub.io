const fs=require('fs')
const http=require('node:http')

const server=http.createServer((req,res)=>{
    // const json_data={
    //     name:"alice",
    //     age:24
    // };
    console.log("working")
    res.writeHead(200,{"Content-Type":"text/html"})
    // const html=fs.readFileSync("./index.html","utf-8")
    fs.createReadStream(__dirname+"./index.html").pipe(res);
    // res.end(html)
})
server.listen(3000,()=>{
    console.log("server is running in 3000")
})

