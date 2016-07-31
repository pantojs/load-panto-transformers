/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-07-31[22:57:35]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const load = require('../');
const panto = require('panto');

describe('load-panto-transformer', () => {
    describe('#load', () => {
        it('should load filter', () => {
            load(panto);
            const s = panto.$('*.js');
            assert.ok(s.filter, 'has filter');
            assert.ok(s.cssSprites, 'has cssSprites');
        });
    });
});