const express=require('express');
const app=express();
app.use(express.json());


//server is only operating in working days
app.use(addActiveTime =(req, res, next)=> {
  
    let hours= new Date().getHours();
    let day= new Date().getDay();
    if((hours>=9)||(hours<=17)||(day==0)||(day==6))
  {
    res.sendFile(__dirname+'/views/closed.html')
    
  }
  else{
      
  next() 
}
}) 


app.use(express.static('views'))

const port=process.env.PORT || 5000
app.listen(port,(err)=>{
    if (err) console.log('server is not running') 
    else
    console.log(`server is running on port ${port}...`)
});