#! /usr/bin/env node
let fs = require("fs");
let path = require("path");

let b = parseFloat("01");

renameFilesInDir(path.dirname(__filename));

function addNumber(filepath) {
    fs.stat(filepath, function (err, stats) {
        if (stats.isFile()) {
            let filename = path.basename(filepath);
            let parentDir = path.dirname(filepath);
            let parentDirname = path.basename(path.dirname(filepath));
            let thisFilename = path.basename(__filename);
            if (filename != thisFilename && filename.indexOf(parentDirname) < 0) {
                let newName = b + filename;
                let newPath = parentDir + "\\" + newName;
                console.log("going to rename from " + filepath + " to " + newPath);
                fs.rename(filepath, newPath);
            }
        } else if (stats.isDirectory()) {
            console.log("============[" + filepath + "] isDir===========");
            renameFilesInDir(filepath);
        } else {
            console.log("unknow type of files");
        }
    });
}

function renameFilesInDir(dir) {
    fs.readdir(dir, function (error, files) {
        let len = files.length;
        let file = null;
        for (let i = 0; i < len; i++){
            file = files[i];
            addNumber(dir + "\\" + file);
            b++;
        }
    });
}