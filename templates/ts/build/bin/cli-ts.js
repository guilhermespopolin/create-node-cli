#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const helpers_1 = require("yargs/helpers");
const cli_1 = (0, tslib_1.__importDefault)(require("../cli"));
(0, cli_1.default)((0, helpers_1.hideBin)(process.argv));
