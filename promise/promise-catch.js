// promise 方式的 ajax

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

let promise = ajax("https://jsonplaceholder.typicode.com/todos/1")

//   错误处理一
// promise.then(
//   (res) => {
//     console.log("resolved", res)
//     return ajax("/error-url")
//   },
//   (error) => {
//     console.log("rejected", error)
//   }
// )

// 错误处理二
promise
  .then((res) => {
    console.log("resolved", res)
    return ajax("/error-url")
  })
  .catch((error) => {
    console.log("rejected", error)
  })
