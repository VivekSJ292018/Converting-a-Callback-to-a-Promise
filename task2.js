//read a file using fs.readFile() without specifying the text encoding

fs.readFile('./sample.txt', (err, data) => {
    if (err) {
        console.error(err);
          return;
    }

    // Data is a buffer
    console.log(data);
});

//you need to covert to a Promise follows those rules then you can use util.promisify
const util = require('util');

const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('./sample.txt', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
	

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

/*You can only use the await keyword inside a 
function that was created with async, hence 
why we have a function wrapper in this example. 
This function wrapper is also known as a Immediately Invoked Function Expressions.*/

(async () => {
    try {
        const content = await readFile('./sample.txt', 'utf-8');
        console.log(content);
    } catch (err) {
        console.error(err);
    }
})();