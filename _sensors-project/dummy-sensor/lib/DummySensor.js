'use strict';

const Sensor = require('generic-sensor-api').Sensor;
const DummySensorReading = require('./DummySensorReading');

module.exports = class DummySensor extends Sensor {

  constructor(sensorOptions) {
    super(sensorOptions);
    this._intervalHandle = null;
  }

  handleStarted() {
    this._intervalHandle = setInterval(
        () => {
            let dummySensorReading = new DummySensorReading(
                Date.now(),
                Math.random()
            )
            this.onchange({
                reading: dummySensorReading
            });
        },
        this.sensorOptions.frequency
    );
  }

  handleStopped() {
      clearInterval(this._intervalHandle);
  }
}
