const EventEmitter=require('node:events')

const event=new EventEmitter()

event.on('SayMyName',()=>{
    console.log("I am Shrilakshmi")
})
event.on('SayMyName',()=>{
    console.log("I am Shenoy")
})

event.on('SayMyName',()=>{
    console.log("I am Shrilakshmi Shenoy")
})



event.emit('SayMyName')