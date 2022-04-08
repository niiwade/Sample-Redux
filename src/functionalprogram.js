//assign as a variable

function sayHello() {
    return "Hello World"
}

let fn = sayHello()

fn()


//Pass an argument

function greet(fnMessage) {
    console.log(fnMessage())
}

greet(sayHello)


//Return a function

function sayHello() {
    return function () {
        return "Hello World, I am Happy"
    }
}

let message = sayHello()

let text = message()


//higher order function

let numbers = [1, 23, 32, 35, 23]

numbers.map(number => number * 2)


setTimeout(() => console.log("hellooo"), 1000)

import { compose, pipe } from "lodash/fp"

let input = " Javascript is awesome "
let output = "<div>" + input.trim() + "</div>"



const trim = str => str.trim()

const wrapDiv = str => `<div>${str}</div>`

const wrapSpan = str => `<span>${str}</span>`

const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim, toLowerCase, wrapDiv)
transform(input)



