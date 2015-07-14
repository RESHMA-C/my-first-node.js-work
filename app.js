var express=require("express");
var path=require("path");
var bodyParser=require('body-parser');

var app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//app.use(express.static(path.join(_dirname,design)));
app.use(bodyParser());

var todoItems = [
  {id: 1,desc:"resh"},
  {id: 2 ,desc:"nandhu"}

];
app.get('/',function(req,res)
{
  res.render('index',{
    title:'My app',
    items :todoItems
    
  });
});
app.post('/add',function(req,res){
  var newItems=req.body.newItems;
  todoItems.push({
    id: todoItems.length + 1,
    desc: newItems
  });

  res.redirect('/');
});


app.listen(1337,function(){
  console.log("server running on 1337");

});
