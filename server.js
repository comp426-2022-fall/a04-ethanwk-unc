#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2));

let port = args.port? args.port:5000;
const app = express()       //create express variable for calling reqs/post

app.get('/', function (req, res) {
    console.log("Hello Console")
    res.send('Hello User');
})

app.listen(port)
//console.log(port)

//create app var for express function

