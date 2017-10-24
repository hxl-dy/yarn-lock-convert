'use strict';
const wrapper = require("./node_modules/yarn/lib/lockfile/wrapper");

export default function yarn2json(dir, output, toJSON) {
    wrapper.default.fromDirectory(dir).then((lockfile) => {
        if (!lockfile.cache) {
            throw "yarn.lock could not be found or loaded";
        }
        output.write(toJSON(lockfile.cache));
    }).catch((err) => {
        throw err;
    });
}
