

fs=require("node:fs/promises")
console.log("First")

fs.readFile('./hello.txt','UTF-8')
.then((data)=> console.log(data))
.catch((error)=>console.log(error))



console.log("second")

fs.writeFile('./hello.txt','Hii I am doing good')


