'use strict';

var chai = require('chai');

var validateAfm = require('../index');

var expect = chai.expect;

describe('Those afm', function() {
  it('should be valid', function() {
    expect(validateAfm('094353733')).to.be.true;
    expect(validateAfm('094282035')).to.be.true;
    expect(validateAfm('997788278')).to.be.true;
  });
});

describe('Those afm', function() {
  it('should be invalid', function() {
    expect(validateAfm('abc')).to.be.false;
    expect(validateAfm('123')).to.be.false;
    expect(validateAfm('000000000')).to.be.false;
    expect(validateAfm('123456789')).to.be.false;
  });
});
