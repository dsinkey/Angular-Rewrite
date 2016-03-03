'use strict';

var Scope = require('../src/scope.js');

describe("Scope", function(){

  it("can be construncted and used as and object", function(){
    var scope = new Scope();
    scope.aProperty = 1;

    expect(scope.aProperty).toBe(1);
  });

  

});
