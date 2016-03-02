var sayHello = require('../src/hello');

describe("Hello", function(){

  it("says Hello", function(){
    expect(sayHello('Jane')).toBe("Hello, Jane!");
  });
});