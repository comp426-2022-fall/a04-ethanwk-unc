#!/usr/bin/env node

import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const args = minimist(process.argv.slice(2));

let port = args.port? args.port:5000;
console.log(port)

/*
let sides = args.sides? args.sides:6; //mark optional type
let dice = args.dice? args.dice:2;
let rolls = args.rolls? args.rolls:1;

var results = roll(sides, dice, rolls);
console.log(JSON.stringify(results))  
*/
