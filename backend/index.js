const express=require('express');
const cors=require('cors')
const server=express();
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const fileUpload=require('express-fileupload')
const path=require('path');
// require("dotenv").config();





var mongoose=require('mongoose');
const { getDefaultNormalizer } = require('@testing-library/react');
const { upload } = require('@testing-library/user-event/dist/upload');
var mongodb='mongodb+srv://live_db:IZWhRLBI1KicgTB3@cluster0.cdopbh2.mongodb.net/'
mongoose.connect(mongodb);
mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('connected',function(){
	console.log('mongoose default connection done');
});
db.on('error',function(err){
	console.log('mongoose default connection error:'+err);
});
const userSchema=new mongoose.Schema({
	to:{type:String},
	subject:{type:String},
    body:{type:String},
	file:{
		 type:Array,
		 data:Buffer
	    },
	date:{type:Date}

})
const Data=mongoose.model('Data',userSchema)

server.use(cors({ origin: '*' }));
server.use(bodyParser.json());
server.use(fileUpload())



//crud - create 
// server.post('/demo',async(req,res)=>{
	
	
	server.post('/demo',async(req,res)=>{
	
	const file = req.files.myFile;
	const random=Math.floor(Math.random()*10);
	const name=random+file.name;
	const path =  "./files/"+name;
	
	  file.mv(path ,(err) => {
	
		if (err) {
		  return res.status(500).send(err);
		}
		return res.send({ status: "success", path: path });
	  });

	let date=new Date();
	console.log("date",date)
	let data=new Data();
	data.to=req.body.to
	data.subject=req.body.subject
	data.body=req.body.body
	data.file=file.name
	data.date=date
	console.log("data",data)
	const doc=await data.save(data); 
	
	// res.json(doc)



	

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	user:'jangidanjali9999@gmail.com',
	pass:'rbqgezdjvhzpbnat'
	}
  });
  
  var mailOptions = {
	from:'jangidanjali9999@gmail.com',
	to: data.to,
	subject: data.subject,
	text: data.body,
	html: "<p>HTML version of the message</p>",
	attachments:
	[
		{
			filename:file.name,
			path:path,
			content:file.data		
		}
	,
// 	{
// 		filename:name,

// 		path:path,
// 		content:file.data	
// 	}
// ,
      {   // utf-8 string as an attachment
            filename: 'demo.txt',
            content: 'hello world!'
        },]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	  console.log(mailOptions)
	}
  });
})




server.get('/demo',async(req,res)=>{
	const docs=await Data.find({});
	res.json(docs)
})

server.listen(8080,()=>{
	console.log('server started')
})