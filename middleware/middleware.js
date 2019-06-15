"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = (err, req, res, next) => {
    const displayErr = {
        message: err.message,
        name: err.name,
        route: req.url,
        method: req.method,
        code: err.code,
        json: err.json,
    };
    console.error(displayErr);
    let status = 500;
    let jsonToSend = { success: false };
    if (err.message.includes("Violation of UNIQUE KEY")) {
        status = 409;
    }
    if (err.message.includes("Found")) {
        status = 409;
        jsonToSend = err.json;
    }
    if (err.message.includes("Incorrect syntax near")) {
        status = 400;
    }
    if (err.message.includes("Cannot insert the value NULL")) {
        status = 422;
    }
    if (err.message.includes("Cannot read property")) {
        status = 424;
    }
    if (err.message.includes("Connection is closed")) {
        status = 503;
    }
    return res.status(status).json(jsonToSend);
};
