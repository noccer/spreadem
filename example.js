"use strict";
exports.__esModule = true;
var index_1 = require("spreadem");
var object = {
    greeting: "hello"
};
var newState = index_1.spreadem(object);
newState.greeting = "yo";
console.log(object, "<< this is the original object");
console.log(newState, "<< this is the new copy of the object, the original has not been changed");
