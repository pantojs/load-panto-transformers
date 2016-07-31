/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-31[22:42:28]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */

'use strict';
const path = require('path');
const pkgUp = require('pkg-up');
const multimatch = require('multimatch');
const camelCase = require('lodash/camelCase');
const arrify = require('arrify');

module.exports = (panto, opts) => {
    opts = opts || {};

    const pattern = arrify(opts.pattern || ['panto-transformer-*']);
    let config = opts.config || pkgUp.sync();
    const scope = arrify(opts.scope || ['dependencies', 'devDependencies', 'peerDependencies',
        'optionalDependencies'
    ]);

    if (typeof config === 'string') {
        config = require(path.resolve(config));
    }

    const names = scope.reduce((result, prop) => {
        const deps = config[prop] || [];
        return result.concat(Array.isArray(deps) ? deps : Object.keys(deps));
    }, []);

    multimatch(names, pattern).forEach(pkgName => {
        panto.loadTransformer(camelCase(pkgName.replace('panto-transformer-', '')), require(pkgName));
    });
};