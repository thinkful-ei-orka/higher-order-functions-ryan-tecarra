function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5)

function filter(arr, fn) {
    let newArray = [];
    for(let i = 0; i , arr.length; i++) {
        if(fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCounter(typeOfWarning) {
    let warningCounter = 0;

    return (location) => {
        warningCounter++;
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${word} today!`);
    };
}

const rocksWarning = hazardWarningCounter('Rocks on the Road');
const iceWarning = hazardWarningCounter('Ice on the Road');
const dustStorm = hazardWarningCounter('Dust Storm');


rocksWarning('1st');
rocksWarning('2nd');
iceWarning('3rd');
iceWarning('4th');
dustStorm('2nd');
dustStorm('3rd');


let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(movements.filter(x => (x[0] >= 0 && x[1] >= 0)));

let steps = movements.map(x => Math.abs(x[0]) + Math.abs(x[1]));
console.log(steps);

movements.forEach(x => {
    let word1 = "steps";
    let word2 = "steps";
    if(Math.abs(x[0]) === 1) {
        word1 = "step";
    } else if(Math.abs(x[1]) === 1) {
        word2 = "step";
    }
    console.log(`Movement #1: ${Math.abs(x[0])} ${word1}`);
    console.log(`Movement #2: ${Math.abs(x[1])} ${word2}`);
});

let test = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let str = test.split(" ").reduce((a,b) => {
    if(b.length === 3) {
        a.push(" ");
    } else {
        a.push(b[b.length - 1].toUpperCase());
    }
    return a;
}, []).join("");

console.log(str);

