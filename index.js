require('dotenv').config();


const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`,
    e : "oo",
    T : ""
}));