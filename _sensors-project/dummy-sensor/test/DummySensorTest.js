'use strict';
const assert = require('assert');
const DummySensor = require('../lib/DummySensor');
const DummySensorReading = require('../lib/DummySensorReading');

describe('DummySensor', () =>
{
    it('should create a dummy sensor', () =>
    {
        let dummySensor = new DummySensor();
        assert.equal(dummySensor instanceof DummySensor, true);
    });
});
