const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
function getNumber() {
    readline.question('Enter a number (or "stop"): ', num => {
        if (num !== 'stop') {
            sum += parseInt(num);
            getNumber();
        } else {
            console.log('Sum of all entered numbers: ' + sum);
            process.exit(0);
        }
    });
} 

getNumber();
