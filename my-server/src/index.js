const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3333;
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(`mongodb+srv://admin:3n5df3k9@goweek-nxmj1.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(res =>
    console.log("conectado ao banco de dados com exito")
);

app.use((req, res, next) => {
    req.io = io;
    return next();

})

app.use(cors( { origin: `*`}));
app.use(express.json());
app.use(require('./routes'));

server.listen(PORT, () => {
    console.log(":)Server started on port "+PORT);
});