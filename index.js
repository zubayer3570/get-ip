const app = require("express")()
app.get("/", (req, res) => {
    res.send({ ip1: req.socket.remoteAddress, ip2: req.header("x-forwarded-for") })
})
app.listen(5000)