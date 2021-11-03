//Implement an alarm clock / timer which will beep after a
//specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

/* For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

*/

const args = process.argv.slice(2);

let delay = 0;

for (let a in args) {
  args[a] = Number(args[a])
  timer += args[a]

setTimeout (() => {
  process.stdout.write('\x07');
  console.log(`The timer is at ${args[a]} second`)}, timer *1000);
};
