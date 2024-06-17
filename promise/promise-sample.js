const promise = new Promise((resolve,reject)=>{
    resolve(100)

    // reject(new Error('promise rejected'))
})

promise.then((value)=>{
    console.log('resolved',value)
},(error)=>{
    console.log('rejected',error)
})

