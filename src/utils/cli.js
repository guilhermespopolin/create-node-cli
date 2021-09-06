import path from "path";
import yargs from "yargs";

import createProject from "../main";

function parseOptions() {
  const args = yargs
    .option("template", {
      alias: "t",
      description: "Specifies the template to be used <js|ts>.",
      choices: ["js", "ts"],
      default: "js",
    })
    .option("git", {
      alias: "g",
      description: "Initialize a git repository when true.",
      type: "boolean",
      default: false,
    })
    .option("install", {
      alias: "i",
      description: "Install template dependencies when true.",
      type: "boolean",
      default: true,
    })
    .help()
    .alias("help", "h")
    .alias("version", "v").argv;

  const defaultProjectName = `cli-${args.template}`;
  const targetPath = path.resolve(args._[0] || defaultProjectName);

  return {
    template: args.template,
    initializeGit: args.git,
    installDependencies: args.install,
    targetPath,
  };
}

export async function cli() {
  const options = parseOptions();
  await createProject(options);
}
