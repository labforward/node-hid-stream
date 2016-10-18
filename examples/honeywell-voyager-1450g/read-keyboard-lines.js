#!/usr/bin/env node

const KeyboardLines = require('../../').KeyboardLines;

const HONEYWELL = 3118;
const VOYAGER_1450G = 3233;

const scanner = new KeyboardLines({
  vid: HONEYWELL,
  pid: VOYAGER_1450G,
});

function closeScanner() {
  scanner.close();
}

// Close scanner when script is exiting is stopped.
process.on('exit', closeScanner);

// Close scanner on ctrl+c event
process.on('SIGINT', closeScanner);

scanner.pipe(process.stdout);