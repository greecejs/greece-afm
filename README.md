# greece-afm [![Build Status](https://travis-ci.org/greecejs/greece-afm.svg?branch=master)](https://travis-ci.org/greecejs/greece-afm) [![Coverage Status](https://coveralls.io/repos/github/greecejs/greece-afm/badge.svg?branch=master)](https://coveralls.io/github/greecejs/greece-afm?branch=master)

> Validation of Greek tax registration number (AFM).

> Έλεγχος εγκυρότητας ενός Α.Φ.Μ.

## Installation

```sh
$ npm install greece-afm
```

## Usage

To validate an AFM:

```js
var validateAfm = require('greece-afm');

validateAfm('094429812'); // true
validateAfm('987654321'); // false
```

## Thanks

Validation algorithm by a [gist](https://gist.github.com/tdoumas/7875550) from @tdoumas

## License

[MIT](http://opensource.org/licenses/mit-license.php)
