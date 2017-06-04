var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/forms");
var data= [{
			names: "Samuel",
			textareas: "Samuel is a cool guy,He loves a girl."
},{
	names:"Madona",
	textareas:"Madona is a sensitive girl,she loves a guy "
}];
var schema = new mongoose.Schema({
	names: String,
	textareas: String
});
var forms = mongoose.model("form",schema);
app.use(bodyParser.urlencoded({extended:true}));

app.get("/forms",function(req,res){
		res.render("mainPage.ejs",{data:data});
});
app.post("/forms",function(req,res){
 		var name = req.body.names;
 		var textarea = req.body.textareas;
 		data.push(name + " " + textarea,{names:name,textareas:textarea});
 		res.redirect("/forms");
 });
 app.get("/forms/new",function(req,res){
 		res.render("formPage.ejs");
 });
app.listen(5050,function(){
		console.log("Connected");
});
