const express=require('express');
const app=express();
const multer=require('multer');
const PORT=process.env.PORT || 5000;
const cors=require('cors');
const path=require('path');
const dotenv=require('dotenv').config();
app.use(cors());
app.use(express.static(path.resolve(__dirname,'files')));
if(process.env.NODE_ENV=='production'){
    app.use(express.static(path.resolve(__dirname,'build')));
}

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./files')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
      }
});
var upload = multer({ storage: storage })

app.post('/upload',upload.single('file'),(req,res)=>{
res.status(200).send(`www.file-uploader.ml/${req.file.filename}`);
});

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build/index.html'))
})

app.listen(PORT,()=>console.log(`Server running on port ${PORT}..`))