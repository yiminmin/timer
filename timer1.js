// This line gets command-line arguments that are passed when running the script. 
// The first two elements of `process.argv` array are the path to the node executable and the file name of the script. 
// So we use `slice(2)` to get the rest of the elements, which are the arguments we want.
const args = process.argv.slice(2);

// This loop goes over each argument passed from the command line.
for (let arg of args) {
  // It tries to convert the argument to a number.
  let time = Number(arg);
  // If the argument is not a number or is a negative number, it ignores that argument and goes to the next one.
  if (Number.isNaN(time) || time < 0) {
    continue;
  }
  // If the argument is a valid number, it sets a timer that will go off after that many seconds.
  setTimeout(() => {
    // When the timer goes off, it makes the system beep (if supported by the system).
    process.stdout.write('\x07');
    // It also outputs a dot to the console as a visible indicator.
    process.stdout.write('.\n');
  }, time * 1000); // Note that the time for setTimeout is in milliseconds, so we multiply by 1000 to convert from seconds.
};

/**
 * For example, if you run node timer1.js 5 3 8, this script will make the system beep (or print a dot if the beep is not supported) after 5 seconds, 3 seconds, and 8 seconds. It will ignore any argument that is not a positive number.

To test this, you could run the script with different arguments, including some that are not numbers or are negative numbers, and see that it correctly ignores those.
 */