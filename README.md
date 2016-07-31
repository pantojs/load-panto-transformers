# load-panto-transformers
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Automatically load panto transformers, inspired by [load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks).

#### Before

```js
panto.loadTransformer('read');
panto.loadTransformer('write');
panto.loadTransformer('uglify');
panto.loadTransformer('less');
panto.loadTransformer('integrity');
panto.loadTransformer('browserify');
panto.loadTransformer('copy');
panto.loadTransformer('filter');
panto.loadTransformer('babel');
panto.loadTransformer('aspect');
panto.loadTransformer('replace');
panto.loadTransformer('stamp');
panto.loadTransformer('resource');
```

#### After

```js
require('load-panto-transformers')(panto);
```

## Install

```
$ npm install --save-dev load-panto-transformers
```


## Usage

```js
// pantofile.js
module.exports = panto => {
    require('load-panto-transformers')(panto);
    panto.$('*.js').read().uglify().write();
};
```

[npm-url]: https://npmjs.org/package/load-panto-transformers
[downloads-image]: http://img.shields.io/npm/dm/load-panto-transformers.svg
[npm-image]: http://img.shields.io/npm/v/load-panto-transformers.svg
[travis-url]: https://travis-ci.org/pantojs/load-panto-transformers
[travis-image]: http://img.shields.io/travis/pantojs/load-panto-transformers.svg
[david-dm-url]:https://david-dm.org/pantojs/load-panto-transformers
[david-dm-image]:https://david-dm.org/pantojs/load-panto-transformers.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/load-panto-transformers#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/load-panto-transformers/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/load-panto-transformers/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/load-panto-transformers?branch=master
