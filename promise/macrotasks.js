// 微任务

console.log("global start")

setTimeout(()=>{
    console.log('setTimeout')
},0)


Promise.resolve().then(()=>{
    console.log('promise')
})

console.log("global end")


