'use strict';

function Scope() {
  this.$$watcher = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn){
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn
  };
  this.$$watchers.push(watcher);
};

module.exports = Scope;