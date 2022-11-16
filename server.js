#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2));

const PORT = args.port? args.port:5000; //if no "--port" default = 5000
const app = express(); //create express variable for calling reqs/post

//args also accepts urlencoded and json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Check endpoint
app.get('/app', function (req, res) {
    res.status(200).send("200 OK");
})

// app/roll endpoint
app.route("/app/roll")
.get((req,res) => {
    res.json(roll(6,2,1))
})
.post((req,res) => {
    const sides = parseInt(req.params.sides)
    const dice = parseInt(req.params.dice)
    const rolls = parseInt(req.params.rolls)

    res.json(roll(sides,dice,rolls))
});

//Non-endpoint
app.get('*', function (req, res) {
    res.status(404).send("404 NOT FOUND")
})

app.listen(PORT)