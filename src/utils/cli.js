import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import createProject from "../main";

function parseOptions() {
  const args = yargs(hideBin(process.argv))
    .scriptName("create-node-cli")
    .command(
      "$0 [project-name]",
      "Create a boilerpate for node cli apps",
      (yargs) => {
        yargs
          .options({
            template: {
              alias: "t",
              description: "Specifies the template to be used <js|ts>.",
              choices: ["js", "ts"],
              default: "js",
            },
            git: {
              alias: "g",
              description: "Initialize a git repository when true.",
              type: "boolean",
              default: false,
            },
            install: {
              alias: "i",
              description: "Install template dependencies when true.",
              type: "boolean",
              default: true,
            },
          })
          .positional("project-name", {
            description: "Project's name. Supports pathing.",
            type: "string",
            default: "node-cli",
          });
      }
    )
    .help()
    .alias("help", "h")
    .alias("version", "v").argv;

  return {
    template: args.template,
    initializeGit: args.git,
    installDependencies: args.install,
    targetPath: path.resolve(args.projectName),
  };
}

export async function cli() {
  const options = parseOptions();
  await createProject(options);
}
