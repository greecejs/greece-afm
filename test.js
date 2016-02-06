'use strict';

var test = require('tape');

var validateAfm = require('./index');

test('Those afm numbers must be valid', function (t) {
  t.plan(3)
  t.equal(validateAfm('094353733'), true);
  t.equal(validateAfm('094282035'), true);
  t.equal(validateAfm('997788278'), true);
});

test('Those afm numbers must be invalid', function (t) {
  t.plan(4)
  t.equal(validateAfm('abc'), false);
  t.equal(validateAfm('123'), false);
  t.equal(validateAfm('000000000'), false);
  t.equal(validateAfm('123456789'), false);
});
