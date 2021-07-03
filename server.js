const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/SpringClient"));
/* ...static(current root folder + the dist folder that contains
our statics files that will be built when "ng build" is run)*/

app.listen(process.env.PORT || 8888, () => {
    console.log("Server is running");
});
//To allow angular to handling routing instead of this server file:
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/SpringClient/index.html"));
})