'use strict';
const path = require('path');
const wrapper = (() => {
    const fullPath = path.resolve(__dirname, "./node_modules/yarn/lib/lockfile/wrapper");
    const nodeModulesCount = (path) => (path.match(/node_modules/g) || []).length;
    let tempfullPath = fullPath;
    while (nodeModulesCount(tempfullPath) > 2) {
        tempfullPath = tempfullPath.replace("node_modules", "tempDontTouchNodeModules");
    }
    return require(tempfullPath.replace(/node_modules(.*)node_modules/,"node_modules").replace(new RegExp("tempDontTouchNodeModules", 'g'), "node_modules"));
})();


exports.toObject = function yarn2Object(dir) {
    if (!dir) {
        dir = process.cwd();
        process.stdio
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