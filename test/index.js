var Rollout = require('..');
var assert  = require('assert');
var Promise = require('bluebird');

describe('rollout', function() {

  it('should return a function', function() {
    assert.equal('function', typeof Rollout);
  });

  it('should return a .create function', function() {
    assert.equal('function', typeof Rollout.create);
  });

  it('should default to a local Redis instance when one isn\'t provided', function() {
    assert.doesNotThrow(function() {
      var rollout = new Rollout();
    }, "Expected Rollout() to default to a local Redis instance.");
  });

  it('should create a new Rollout instance w/ .create()', function() {
    assert(Rollout.create() instanceof Rollout);
  });

  it('should have an .active() method', function() {
    assert.equal('function', typeof Rollout.create().active);
  });

  it('should throw an error when calling .active() without any arguments', function() {
    var rollout = Rollout.create();

    assert.throws(function() {
      rollout.active();
    }, Error);

  });

  it('should allow a call to .active() without a user ID.', function() {
    var rollout = Rollout.create();

    assert.doesNotThrow(function() {
      rollout.active('foo');
    }, "Expected .active() to have an *optional* user ID argument.");
  });

  it('should return a new promise when calling .active()', function() {
    var rollout = Rollout.create();

    assert(rollout.active('foo') instanceof Promise);
  });

});