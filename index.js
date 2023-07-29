const app = require("express")()
app.get("/", (req, res) => {
    res.send({ ip: req.socket.remoteAddress })
})
app.listen(5000)