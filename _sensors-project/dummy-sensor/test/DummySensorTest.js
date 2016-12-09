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
    it('should start and stop', done =>
    {
        let dummySensor = new DummySensor();
        dummySensor.start().then(() => {
            dummySensor.stop().then(() => {
                done();
            });
        });
    });
    it('should generate value', done =>
    {
        let dummySensor = new DummySensor();
        dummySensor.start().then(() => {
            setTimeout(() => {
                dummySensor.stop().then(() => {
                    done();
                });
            }, 500);
        });
    });
    it('should generate value', done =>
    {
        let dummySensor = new DummySensor();
        dummySensor.onchange = event => {
            assert.equal(event.reading.dummyValue > 0, true);
            assert.equal(event.reading.dummyValue < 1, true);
        }
        dummySensor.start().then(() => {
            setTimeout(() => {
                dummySensor.stop().then(() => {
                    done();
                });
            }, 500);
        });
    });
});
