const app = require("express")()
app.get("/", (req, res) => {
    res.send({ ip: req.header("x-forwarded-for") })
})
app.listen(5000)
