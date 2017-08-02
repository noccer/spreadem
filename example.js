"use strict";
exports.__esModule = true;
var spreadem_1 = require("spreadem");
var object = {
    greeting: "hello"
};
var newState = spreadem_1.spreadem(object);
newState.greeting = "yo";
console.log(object);
console.log(newState);
