[![npm version](https://badge.fury.io/js/yarn-lock-convert.svg)](https://www.npmjs.com/package/yarn-lock-convert)


# yarn-lock-convert

This program uses yarn's official parser to read the `yarn.lock` file and then
produce a promise that returns a json/object.

## Install
#### YARN
```bash
yarn add yarn-lock-convert
```
### or     
#### NPM
```bash
npm install yarn-lock-convert
```


## Usage
### Typescript:
```ts
import * as yarnconverter from 'yarn-lock-convert';
//if you want an object
yarnconverter.toObject().then((yarnObject)=>console.log(yarnObject));
//if you want a JSON file
yarnconverter.toJson().then((yarnJsonString)=>console.log(yarnJsonString));
//if you want another directory
yarnconverter.toJson("/home/www/someproject").then((yarnJsonString)=>console.log(yarnJsonString));
```
### Javascript:
```js
const yarnconverter = require("yarn-lock-convert");
//if you want an object
yarnconverter.toObject().then((yarnObject)=>console.log(yarnObject));
//if you want a JSON file
yarnconverter.toJson().then((yarnJsonString)=>console.log(yarnJsonString));
//if you want another directory
yarnconverter.toJson("/home/www/someproject").then((yarnJsonString)=>console.log(yarnJsonString));
```

## Credits
[zimbatm](https://github.com/zimbatm) - forked [this project ](https://github.com/numtide/yarnlock2json) from theirs, and modified to my needs.