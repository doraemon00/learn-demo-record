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

var promise2 = Promise.resolve(promise)

console.log(promise2 === promise) // true
