﻿var mains = [];
const fs = require('fs');
var num = 0;
var countz = num;
var max = countz + 1000;
function start() {
    fs.readFile('./data.json', 'utf8', function (err, contents) {
        if (err) {
            console.log("File not Exist");
        }
        eval(`mains = ${contents}`);
        num = mains.length;
        countz = num;
    });
}
function generate(array) {
    countz = Math.round((Math.random() * (max - num + 1)) + num + 1);
    mains[countz] = array;
    num = countz;
    max = num + 1000;
    const runs = JSON.stringify(mains);
    fs.writeFile("./data.json", runs, function (err) {
        if (err) throw err;
    });
    return countz;
} function readall() {
    return mains;
} function read(idno) {
    return mains[idno];
} function reade(idno, name) {
    return eval(`mains[${idno}].` + name);
} function change(idno, array) {
    mains[idno] = array;
    const runs = JSON.stringify(mains);
    fs.writeFile("./data.json", runs, function (err) {
        if (err) {
            return console.log(err);
        }
    });
} function changee(idno, name, array) {
    eval(`mains[${idno}].${name} = ${array}`);
    const runs = JSON.stringify(mains);
    fs.writeFile("./data.json", runs, function (err) {
        if (err) {
            return console.log(err);
        }
    });
} function set(array) {
    mains = array;
    const runs = JSON.stringify(mains);
    fs.writeFile("./data.json", runs, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
module.exports = {
    generate,
    readall,
    read,
    reade,
    change,
    changee,
    set,
    start,
};