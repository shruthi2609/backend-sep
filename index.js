/*const test=require("./modules/test1")
test()*/
/*const os=require("os")
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())
console.log(__dirname)
console.log(__filename)*/
const http=require("http")
const url=require("url")
const app=http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html"})
const data=url.parse(req.url,true)
console.log(data.pathname)
if(data.pathname==="/search")
{
    res.write("<h2> Product Search </h2>")
    res.end()
}
if(data.pathname==="/productprice")
{
    res.write("<h2> Product price </h2>")
    res.end()
}
res.write("<h2> Home Page </h2>")
res.end()

})
app.listen(3001,()=>console.log("server listening to the req..."))