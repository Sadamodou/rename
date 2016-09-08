#! /usr/bin/env node
let fs = require('fs');
let path = require('path');
function ls(ff) {
    let files = fs.readdirSync(ff);

    let len = files.length;
    for (let i = 0; i < len; i++) {

        let fname = files[i];

        let newName = i + 1 + fname;

        let stat = fs.lstatSync(fname);
        if (stat.isDirectory() == true) {
            ls(fname);
        }
        else {
            console.log(fname);

            fs.rename(fname, newName, function (err) {
                if (err) {
                    throw err;
                }
            })

        }
    }
}
ls('.');  