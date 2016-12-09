"use strict";

const uuid = require("uuid");
const httpError = require("http-errors");
const http = require("http");

module.exports = class Sensors
{
    static sensors (request, response, next)
    {
        switch (request.method)
        {
            case "GET":
              let sensors = [];
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
