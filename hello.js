const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
  	  readline.question('What is your age?', age => {
        const allowed = "You're allowed to get a drivers license in Iowa";
        const notAllowed = "You're not allowed to drive in Iowa";
        if(age<=16){
        console.log(notAllowed); }
        else{
        console.log(allowed);}
        readline.close();
    });
});
