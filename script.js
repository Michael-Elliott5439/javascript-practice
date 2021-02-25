//This file is linked to via the line <script src="js/script.js"> </script> in the <body> of the html file.

// Primitive 
let number = 1;
let string = '1';
let string2 = "1";
let string3 = `1`;
let boolean = true;

//Take Home Challenge: Day One
/*The above comment is a single line comment
and this is a multi-line comment */
const myName = 'Michael';
const food = 'Ramen';
console.log(myName, food);

// Complex/Containers (containers can contain other containers)
const object = {
    myNumber: 1,
    username: 'Michael',
    isActive: true,
};

const myElement = {
    innerHTML: 'This is an element',
    style: {
        color: 'red',
        backgroundColor: 'white'
    }
}

const array = [1, 'sample text', true]; //normally are lists of the same types of things

//let is a changeable variable, const variables are guaranteed to always refer to the same data

console.log(number, string, string2, string3, boolean, object.username, array[1]);

/* setTimeout(() => {
    document.body.innerHTML = `<h1 class="myH1" style="font-size: 100px;">Changed</h1>
    <p>This is a paragraph</p>
    <button onclick="alert('I am an alert box!');">Try it</button>`;

    document.querySelector('p').style.color = 'blue';
    document.querySelector('.myH1').style.color = 'red';
    document.querySelector('button').classList.add('active');

}, 3000); */
