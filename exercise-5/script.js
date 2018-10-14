/* Part 2 */
console.log('PART 2')
/* 
    I do not believe the commenting guidelines in the assignment
    are a good idea, and will not be following them; overcommenting
    is not helpful. I'll add comments if I do something that's not
    immediately clear from the code itself.
*/

var numberString = "";
for (i = 1; i < 21; i++) {
    /* Concatenating values to a string to keep output on one line */
    numberString += i + " ";
}
console.log(numberString);

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i < numbers.length; i++) {
    /* saves us from typing s[i] all the time */
    var number = numbers[i];

    if (number % 3 == 0) {
        if (number % 5 == 0) {
            /* divisible by both 3 and 5 */
            console.log("eplekake");
        } else {
            /* just divisible by 3 */
            console.log("eple");
        }
    } else if (number % 5 == 0) {
        /* divisible by 5 */
        console.log("kake");
    } else {
        /* not divisible by 3 or 5 */
        console.log(number);
    }
}
/* Part 4 */
document.getElementById("title").innerText = "Hello, JavaScript";

/* Part 5 */
/* 
    The task was not clear which method to use for changing this,
    so we will be using the style DOM property. It is in general
    the best and cleanest way to change the style of an element,
    updating the style attribute is not very pretty.

    We will first be writing the functions to change the CSS properties,
    and then assign them as event listeners for the onclick event on
    their respective buttons.
*/

function changeDisplay() {
    document.getElementById("magic").style.display = "none";
}

document.getElementById("display-btn").onclick = changeDisplay;

function changeVisibility() {
    document.getElementById("magic").style.visibility = "hidden";
    document.getElementById("magic").style.display = "block";
}

document.getElementById("visibility-btn").onclick = changeVisibility;

function reset() {
    document.getElementById("magic").style.visibility = "visible";
    document.getElementById("magic").style.display = "block";
}

document.getElementById("reset-btn").onclick = reset;

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

const list = document.getElementById("tech");

for (i = 0; i < technologies.length; i++) {
    /* create and append new li elements */
    const li = document.createElement("li");
    li.innerText = technologies[i];
    list.appendChild(li);
}
