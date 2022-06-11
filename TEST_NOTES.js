// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// ** note ***
// With mocha, we can test frontend and backend code separately and easily.
// it is a good practice to test frontend code first and then test backend code.

// in Mocha it means "it" is a test case.
// describe is a group of test cases.
// beforeEach is a hook that runs before each test case.

// ** note ***

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
  right() {
    return 'right';
  }
}

let car;
beforeEach(() => {
  car = new Car();
});

describe('Car', () => {
  it('should park', () => {
    assert.equal(car.park(), 'stopped');
  });
  it('should drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
  it('should right', () => {
    assert.equal(car.right(), 'right');
  });
});
