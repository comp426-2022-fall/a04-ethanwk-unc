#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2))

let port = args.port? args.port:5000
const app = express() //create express variable for calling reqs/post

//Check endpoint
app.get('/app', function (req, res) {
    res.status(200).send("200 OK")
})

//default roll
app.get('/app/roll', function (req, res) {
    res.json(roll(6,2,1))
})

//Non-endpoint
app.get('*', function (req, res) {
    res.status(404).send("404 NOT FOUND")
})


app.listen(port)