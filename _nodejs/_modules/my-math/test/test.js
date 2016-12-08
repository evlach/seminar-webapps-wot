"use strict";

describe("MyMath module tests", function ()
{
    const assert = require("assert");
    const MyMath = require("..");

    it("should get correct addition of 2+2", () =>
    {
        assert(MyMath.add(2, 2), 4);
    });
    it("should catch type error for object", () =>
    {
        assert.throws(() => {
            MyMath.add({}, 2);
        }, TypeError);
    });
    it("should catch type error for string", () =>
    {
        assert.throws(() => {
            MyMath.add(2, "4");
        }, TypeError);
    });
    it("should catch correct error message", () =>
    {
        assert.throws(() => { MyMath.add(2, "33.1"); }, (err) => {
            return err instanceof TypeError &&
                (err.message === "string: '33.1' is not a valid number.");
        });
    });
});