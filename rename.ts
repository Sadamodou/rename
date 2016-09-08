#! /usr/bin/env node
let fs = require("fs");
let path = require("path");

function addNumber(filepath) {
    fs.stat(filepath, function (err, stats) {
        if (stats.isFile()) {
            let filename = path.basename(filepath);
            let parentDir = path.dirname(filepath);
            let parentDirname = path.basename(path.dirname(filepath));
            let thisFilename = path.basename(_filename);
            if(filename!=thisFilename&&filename.indexof(parentDirname)<0){
            
            }
        }
    });
}