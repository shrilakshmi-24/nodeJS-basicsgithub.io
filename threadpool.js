const crypto=require("node:crypto")
process.env.UV_THREADPOOL_SIZE = 5
const start=Date.now()
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",10000,512,"sha512")

// console.log("Hash: ",Date.now()-start)
const max_call=5
for(let i=0;i<max_call;i++){
    crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now()-start)
    })
}



