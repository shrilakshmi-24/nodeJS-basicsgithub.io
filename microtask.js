// Promise.resolve().then(()=>console.log("promise"))
// process.nextTick(()=>console.log("this is process.next 1"))
// setTimeout(()=>console.log("set time out 1"),0)
// setTimeout(()=>console.log("set time out 2"),0)
// setTimeout(()=>console.log("set time out 3"),0)


// process.nextTick(()=>console.log("This is process. next tick1 "))
// process.nextTick(()=>{
//     console.log("this is nextTick2")
//     process.nextTick(()=>{
//         console.log("this is inside nextTick2")
//     })

// })

// process.nextTick(()=>console.log("This is process. next tick 3 "))
// Promise.resolve().then(()=>console.log("promise1"))
// Promise.resolve().then(()=>{
//     console.log("promise 2")
//     process.nextTick(()=>console.log("this next tick inside promise"))

// })
// Promise.resolve().then(()=>console.log("promise 3"))

const fs =require("fs")
fs.readFile(__filename,()=>{
    console.log("this is read file 1")
})

setImmediate(()=>console.log("set immediate"))

setTimeout(()=>console.log("this is set time out 1"),0)

Promise.resolve().then(()=>console.log("this is promise 1"))

process.nextTick(()=>console.log("next tick 1"))



