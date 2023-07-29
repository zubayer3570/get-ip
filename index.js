const app = require("express")()
app.get("/", (req,res)=>{
    // console.log("working fine!")
    // console.log(res.socket.remoteAddress)
    res.send({ip: res.socket.remoteAddress})
})
app.listen(5000)