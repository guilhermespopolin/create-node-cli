#! /usr/bin/env node

require = require("esm")(module);
require("../utils/cli").cli(process.argv);
