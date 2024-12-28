"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const express_1 = require("express");
function default_1() {
    const router = (0, express_1.Router)();
    router.get("/", (_, res) => {
        res.status(200).json({
            meta: {
                code: 200,
                message: "ok",
            },
            data: "ok",
        });
    });
    return router;
}
