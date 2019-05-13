---
title: What I need to know about JavaScript
date: '2019-02-01'
creator: 'David Ruiz'
spoiler: We talk about classes, callbacks, promises, and Async / await.
---



![Code](https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

We need to know some things that are very important about JS. Well, first I’m going to tell you that JavaScript it’s a mono-thread programming language. It means that it just can run one process at time. 

But this is not bad, before you start to hate it, you need to know that the power of JavaScript begins with the Event Loop and also that it work in a non-blocking way. This is the big difference between other multi-thread programming languages.  

 ## Lets talk about Non-blocking 

 All the operations into JavaScript comes by I/O (Input / Output), so it makes that the process never blocks. That is what we called asynchronism. But the only thing that’s not already processed before it ends are the callbacks. 

 

The most difficult part for every people that is starting with JS is to understand is how works the asynchronism. I’m going to make a easy example about it: 

 ![Cook](https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

> Lets imagine that you are making the breakfast. The first step is cooking the eggs, after that you put them into a plate, then you prepare a delicious coffee and as a final step you eat it.  

 

This is how you do a synchronous breakfast but if we think in a asynchronous way. It will be like this: 

 

> Firtsly you prepare the eggs, while they are being fritte lets prepare the coffe. After that you can put the eggs into a plate and the coffe into a glass. Then you can enjoy your breakfast. 

## Event Loop

For the non-blocking works JavaScript needs to storage the callback into the list that is processing all the operations that comes from the callback. After it sent the callback that is already finished to the call stack. This Call stack is the function that is currently being run. 

Lets understand this through the code.

``` js
// Synchronous code
console.log('Hello world')
console.log(`I'm hungry!`)
/*
    OUTPUT:
    Hello world
    I'm hungry!
*/

// Go to Asynchronous code
console.log(`I'm hungry!`)
setTimeout(() => {
    console.log('The dinner is done')
},1000)
console.log('Buy something')

/*
    OUTPUT:
    I'm hungry!
    Buy something
    undefined
    The dinner is done
*/

```

## Classes

This term was included in ES6 (EcmaScript 2015) to simplify the way that is use [prototype-based inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). The syntax of classes is very much easy to understand than the older ones.

> NOTE: The classes in JavaScript doesn't introduce a new meaning of object-oriented inheritance. It's just a sugar syntax.

Need to know that the class syntax has two components: class declaration and class expressions. Let's make an example about the first one.

``` js
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
```
There is a big difference between function declarations and class declarations. So, what is this difference about? Functions are hoisted and classes not. It means that need to be declare before you access them.

Class expressions are another form to define a class. Those can be named or unnamed. I give you an example in code to know this better.

``` js
// Unnamed
const David = class {
    constructor(age){
        this.age = age
    }
}

// Named
const Dan = class Dann {
    constructor(age){
        this.age = age
    }
}
```
## Callbacks


A callback is just a function passend into another as argument.

This is about because in JavaScript the functions are objects. It means that the functions can take other functions as arguments, and can be returned by other functions.

Quick example: 

``` js

function askAge(callback){
    let age = prompt('How old are you?')
    callback(age)
}

askAge((age) => {
    alert(`Your age is ${age}, right?`)
})

```

## Promises

The promises are another way to make asynchronous tasks. 

It is very easy to understand Promises, because is very similar to the reality. So it means that a promise gives you an assurance that something will be done. In JavaScript to resolve a promise we got four classes.

- fulfilled
- rejected
- pending
- settled

![Promises](https://mdn.mozillademos.org/files/8633/promises.png)

In this example we create a promise that has a asynchronous task in it. After that we run the promise with a thenable method.

``` js
let promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
})

promise.then(alert) // shows 'done' after a second.
```

## Aync / Await

Async functions are just functions that return promises. This form simplify the life of developers at moment to write Promises. Let me give you an example of this.

#### Promises

``` js
function fetchFromAPI(id){
    // This is just an example with an imaginary API
    return fetch(`http://superapi.com/users/${id}`)
        .then(response => response.json())
        .then(data => data.userId)
}

const result = fetchFromAPI(12) // return the id
```

#### Async / Await

``` js
async function fetchFromAPI(id){
    // This is just an example with an imaginary API
    const response = await fetch(`http://superapi.com/users/${id}`)
    const data = await response.json()
    return data.userId
}

const result = fetchFromAPI(12) // return the id
```

Watch out! Async functions are resolved in sequential way. It means that if you need to wrap some parallel data async / await is not the solution, you need to use an array of promises.



