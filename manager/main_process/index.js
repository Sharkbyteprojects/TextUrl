const arrays = require('./data');
function becomeData() {
    return arrays.readall();
}
function becomenum(num) {
    return arrays.read(num);
}
function save(data) {
    return arrays.generate(data);
}
function read(id, name) {
    return arrays.reade(id, name);
}
function set(array) {
    arrays.set(array);
}
function serdelete (number){
    arrays.change(number, null);
}
module.exports = {
    becomeData,
    save,
    read,
    becomenum,
    set,
    serdelete,
};