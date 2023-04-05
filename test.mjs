import { existsSync, readFileSync} from 'fs';
import {findConfigFile} from './out4.mjs';
// import {findConfigFile, parseJsonConfigFileContent, readConfigFile} from './out.js';

const configPath = findConfigFile('.', (path) => existsSync(path));
console.log(configPath);
// const config = readConfigFile(configPath, (path) => readFileSync(path, 'utf8'));
// console.log(config);
