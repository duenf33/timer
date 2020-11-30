// version 0
console.log('\u0007');

// version 1
setTimeout(function() {
    console.log('\u0007');
    console.log('3 seconds has passed!')
}, 3000);

// version 2
const time = process.argv[2];

setTimeout(function() {
    console.log(time + ' seconds have passed!');
    console.log('\u0007');
}, time * 1000);

// version 3
const times = process.argv.slice(2);
for (const time of times) {
    setTimeout(function () {
    console.log('\u0007');
    console.log(`Time's up!`)
  }, time * 1000)
}

// version 4
const times = process.argv.slice(2);
for (const time of times) {
    setTimeout(function() {
        console.log('\u0007');
        console.log(`This is your reminder that ${ time } seconds have passed.`);
    }, time * 1000)
}

// version 5
const times = process.argv.slice(2);
const seconds = 1000;
const minutes = 60;
const hours = 60;
for (const time of times) {
    let ms = time;
    if (ms.endsWith('m')) {
        ms = ms.slice(0, -1) * seconds * minutes;
    } else if (ms.endsWith('h')) {
        ms = ms.slice(0, -1) * seconds * minutes * hours;
    } else {
        ms = time * seconds;
    }

    setTimeout(function() {
        console.log('\u0007');
        console.log(time + ' has passed!');
    }, ms)
}

// version 6
const time = process.argv[2];
const message = process.argv.slice(3).join(' ');
let ms = time;
if (ms.endsWith('m')) {
    ms = ms.slice(0, -1) * 60000;
} else if (ms.endsWith('h')) {
    ms = ms.slice(0, -1) * 3600000;
} else {
    ms = time * 1000
}

setTimeout(function() {
    console.log('\u0007');
    console.log(message);
}, ms)