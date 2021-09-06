import yargs, { BuilderCallback } from "yargs";

import foo, { Options } from "./main";

const builder: BuilderCallback<{}, { str: string }> = (yargs) => {
  yargs.positional("str", {
    type: "string",
    description: "Text to be echoed in the screen",
    demandOption: true,
  });
};

function parseOptions(rawArgs: string[]) {
  const args = yargs(rawArgs)
    .command("$0 <str>", "Echoes a string", builder)
    .help()
    .alias({ help: "h", version: "v" })
    .parseSync();

  return {
    text: args.str,
  } as Options;
}

export default function cli(rawArgs: string[]) {
  const options = parseOptions(rawArgs);
  foo(options);
}
