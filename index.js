const app = require("express")()
app.get("/", (req, res) => {
    res.send({ ip: req.header("x-forwarded-for")[0] })
})
app.listen(5000)