import http from 'http'
import cluster from "cluster";
import os from 'os'
console.log(os.cpus().length)



if(cluster.isMaster){
    console.log(`master  ${process.pid} is running`)
    cluster.fork()
    cluster.fork()
}
else{
    console.log(`worker ${process.pid} is running`)
    
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"ContentType":"text/plain"})
        res.end("Home Page")

    }
    else if(req.url==="/slow-page"){
        for(let i=0;i<600000000;i++){}
        res.writeHead(200,{"ContentType":"text/plain"})
        res.end("slow Page")
    }
  
})
server.listen(8000,()=>console.log("server is running on 3000"))
}