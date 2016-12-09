"use strict";

const uuid = require("uuid");
const httpError = require("http-errors");
const http = require("http");
const DummySensor = require("dummy-sensor").DummySensor;

let sensors = [];
for(let i=0; i<10; i++) {
  sensors.push(new DummySensor());
}

sensors = sensors.map(sensor =>
  ({
    id: sensor.id
  })
)

module.exports = class Sensors
{
    static sensors (request, response, next)
    {
        switch (request.method)
        {
            case "GET":
              response.format(
                {
                    "application/json": () =>
                    {
                        response.status(200).json({ "sensors": sensors });
                    },
                    "default": () => { next(new httpError.NotAcceptable()); }
                });
                break;
            case "POST":
            case "CONNECT":
            case "DELETE":
            case "HEAD":
            case "OPTIONS":
            case "PUT":
            case "TRACE":
            default:
                response.set("allow", "GET");
                next(new httpError.MethodNotAllowed());
                break;
        }
    }

    static sensor (request, response, next)
    {
        switch (request.method)
        {

            case "GET":

                break;
            case "DELETE":
            case "PUT":
            case "CONNECT":
            case "HEAD":
            case "OPTIONS":
            case "POST":
            case "TRACE":
            default:
                response.set("allow", "GET, POST");
                next(new httpError.MethodNotAllowed());
                break;
        }
    }

    static _404 (request, response)
    {
        response.status(404).json({ "error": http.STATUS_CODES[404] })
    }
};
