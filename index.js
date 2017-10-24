'use strict';
const path = require('path');
const wrapper = require(path.resolve(__dirname, "./node_modules/yarn/lib/lockfile/wrapper"));
exports.toObject = function yarn2Object(dir) {
    if (!dir) {
        dir = process.cwd();
    }
    return wrapper.default.fromDirectory(dir).then((lockfile) => {
        return Promise.resolve(lockfile.cache);
    }).catch((err) => {
        throw err;
    });
};

exports.toJson = function yarn2Json(dir, output) {
    return exports.toObject(dir).then((answer) => {
        const json = JSON.stringify(answer);
        if (output) {
            output.write(json);
        }
        return json;
    });
};