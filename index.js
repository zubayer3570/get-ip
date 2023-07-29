const app = require("express")()
app.get("/", (req,res)=>{
    // console.log("working fine!")
    console.log(res.socket.remoteAddress)
    res.send({message: "working fine!"})
})
app.listen(5000)