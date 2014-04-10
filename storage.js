var WeakMap = require('./index.js');

module.exports = function createStorage() {
  var store = new WeakMap();
  return function storage(object) {
    var ret = store.get(object);
    if (!ret) { ret = {}; store.set(object, ret); }
    return ret;
  }
}
