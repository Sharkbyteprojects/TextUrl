const arrays = require('./data');
const repos = {
    github: 'https://github.com/Sharkbyteprojects/TextUrl',
    bitbucket: 'https://bitbucket.org/sharkbytepro/texturl/',
    npm: 'https://www.npmjs.com/package/text-url',
    docker: 'https://hub.docker.com/r/shark2byte/text-url',
    chat: 'https://gitter.im/Sharkbyteprojects/TextUrl?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
    gitlab: 'https://gitlab.com/Sharkbyteprojects/text-url'
};
function becomeData() {
    return arrays.readall();
}
function becomenum(num) {
    return arrays.read(num);
}
function save(data) {
    return arrays.generate(data);
}
function start() {
    console.log("Server Starting up");
    return arrays.start();
}
function read(id, name) {
    return arrays.reade(id, name);
}
function rea(id){
    return arrays.read(id);
}
function set(array) {
    arrays.set(array);
}
function serdelete (number){
    arrays.change(number, null);
}function rep (){
    return repos;
}
module.exports = {
    becomeData,
    save,
    read,
    becomenum,
    set,
    serdelete,
    rea,
    rep,
    start,
};