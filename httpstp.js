const https=require('https')
const maxcall=18
const start=Date.now()

for(let i=0;i<maxcall;i++){
    https
    .request("https://www.google.com",(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`request: ${i+1}`,Date.now(-start))
        })
    })
    .end()
}