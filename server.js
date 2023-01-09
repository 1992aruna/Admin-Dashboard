const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


//user router
const eventsRouter = require("./routes/events.js");
//const projectRouter = require("./routes/Events.js");
//const taskRouter = require("./routes/Task.js");
//const ticketsRouter = require("./routes/Tickets.js");

const MONGODB_URL = process.env.MONGODB_URL
const connectDatabase = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true        
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
    
}

const PORT = 5000;
connectDatabase();
//configuring app
const app = express()
app.use(express.json())
app.use(cors())




app.use('/events', eventsRouter)
//app.use('/project', projectRouter)
//app.use('/task', taskRouter)
//app.use('/tickets', ticketsRouter)

app.listen(PORT, () => {
    console.log(`Server  is running on port  ${PORT}`)
})



