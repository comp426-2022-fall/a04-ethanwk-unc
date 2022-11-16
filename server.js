#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2))

const PORT = args.port? args.port:5000 //if no "--port" default = 5000
const app = express() //create express variable for calling reqs/post


//args also accepts urlencoded and json
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Check endpoint
app.get('/app', function (req, res) {
    res.status(200).send("200 OK")
})

//default roll
app.get('/app/roll', function (req, res) {
    res.json(roll(6,2,1))
})

//parse urlencode or json for sides, dice, rolls
app.post('/app/roll', function (req, res) {
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);

    if (sides = null) {sides = 6}
    if (dice = null) {dice = 2} 
    if (rolls = null) {rolls = 1}

    res.json(roll(sides,dice,rolls))
})

//Non-endpoint
app.get('*', function (req, res) {
    res.status(404).send("404 NOT FOUND")
})

app.listen(PORT)