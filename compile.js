// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const readFile = fs.readFileSync(inboxPath, 'utf8');

// left number amount of contracs!
module.exports = solc.compile(readFile, 1).contracts[':Inbox'];
git;
