"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const yargs_1 = (0, tslib_1.__importDefault)(require("yargs"));
const main_1 = (0, tslib_1.__importDefault)(require("./main"));
const builder = (yargs) => {
    yargs.positional("str", {
        type: "string",
        description: "Text to be echoed in the screen",
        demandOption: true,
    });
};
function parseOptions(rawArgs) {
    const args = (0, yargs_1.default)(rawArgs)
        .command("$0 <str>", "Echoes a string", builder)
        .help()
        .alias({ help: "h", version: "v" })
        .parseSync();
    return {
        text: args.str,
    };
}
function cli(rawArgs) {
    const options = parseOptions(rawArgs);
    (0, main_1.default)(options);
}
exports.default = cli;
