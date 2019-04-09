var mains = [];
var num = 0;
var countz = num;
var max = countz + 1000;
function generate(array) {
    countz = Math.round((Math.random() * (max - num + 1)) + num + 1);
    mains[countz] = array;
    num = countz;
    max = num + 1000;
    return countz;
} function readall() {
    return mains;
} function read(idno) {
    return mains[idno];
} function reade(idno, name) {
    return eval(`mains[${idno}].` + name);
} function change(idno, array) {
    mains[idno] = array;
} function changee(idno, name, array) {
    eval(`mains[${idno}].${name} = ${array}`)
} function set(array) {
    mains = array;
}
module.exports = {
    generate,
    readall,
    read,
    reade,
    change,
    changee,
    set,
};