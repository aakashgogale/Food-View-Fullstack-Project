// start server
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first"); 


connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})