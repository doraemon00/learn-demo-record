const express= require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const app = express()

// 解决跨域
const cors = require('cors')
app.use(cors())

app.post('/upload', upload.single('file'), (req, res) => {
  res.send(req.file)
  console.log(req.body)
  console.log(req.file)

})

app.listen(3001,()=>{
  console.log('server is running')
})