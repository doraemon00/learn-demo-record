function ajax(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.responseType = "json"
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

//   let promise = Promise.all(
//     [
//         ajax("https://jsonplaceholder.typicode.com/todos/1"),
//         ajax("https://jsonplaceholder.typicode.com/todos/2"),
//         ajax("https://jsonplaceholder.typicode.com/todos/3")
//     ]
//   )

//     promise.then(
//         (values) => {
//         console.log("resolved", values)
//         },
//         (error) => {
//         console.log("rejected", error)
//         }
//     )

const request = ajax("https://jsonplaceholder.typicode.com/todos/1")
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Request Timeout")
  }, 500)
})

Promise.race([request, timeout])
  .then((value) => {
    console.log("resolved", value)
  })
  .catch((error) => {
    console.log("rejected", error)
  })
