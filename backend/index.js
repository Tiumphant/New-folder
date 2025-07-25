require("../backend/db/config")
require("dotenv").config();
const express = require("express")
const cors = require("cors")
const adminRoutes = require("../backend/controller/adminController")
const employeeRoutes = require("./controller/EmplloyeeController")
const userRotues = require("./controller/UserController")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", adminRoutes)
app.use("/api", employeeRoutes)
app.use("/api", userRotues)
app.get("/", async(req,res)=>{
    res.send("this is index file")
})
app.listen(8000)
