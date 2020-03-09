#!/usr/bin/env node
const defaults = {
    httpPort: 8080,
    boundHost: 'localhost',
    verbose: false,
    debug: false,
    readTimeout: 5,
    help: false,
    readTimeout: 300,
    deathTimeout: 300,
};    
defaults.httpPort = 4000;
require('weinre/lib/weinre.js').run(defaults);