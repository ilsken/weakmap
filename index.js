var hasOwnProperty = Object.prototype.hasOwnProperty;
var private_store = {
  data: "__weakmap_private_data__$",
  count: 0,
  id: function () {
    return [(Math.random() * 1e9) >>> 0 ,this.count++].join('_');
  },
  get: function(key) {
    if (!hasOwnProperty.call(key, this.data)) {
     Object.defineProperty(key, this.data, {value: Object.create(null)});
    }
    return key.__weakmap_private_data__$;
  },
  has: function (key, id) {
    return hasOwnProperty.call(key, this.data) && hasOwnProperty.call(key.__weakmap_private_data__$, id);
  }
}
function WeakMap() {
  Object.defineProperty(this, 'id', {
    value: private_store.id()
  });
}
WeakMap.prototype.set = function (key, value) {
  private_store.get(key)[this.id] = value;
};

WeakMap.prototype.get = function (key) {
  return private_store.get(key)[this.id];
}

WeakMap.prototype.has = function (key) {
  return private_store.has(key, this.id);
}
WeakMap.prototype.delete = function (key) {
  if (this.has(key)) {
    delete private_store.get(key)[this.id];
  }
}

module.exports = WeakMap;
