import fs from "fs";
import path from "path";
import { promisify } from "util";
import ncp from "ncp";
import chalk from "chalk";
import execa from "execa";
import { projectInstall } from "pkg-install";
import Listr from "listr";

import logger from "./utils/logger";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(srcPath, targetPath) {
  return copy(srcPath, targetPath, {
    clobber: false,
    // exclude node modules and build folders
    filter: (name) => !/(node_modules)/.test(name) && !/build/.test(name),
  });
}

async function initGit(cwd) {
  const result = await execa("git", ["init"], {
    cwd,
  });

  if (result.failed) {
    return Promise.reject(result.stderr);
  }
}

async function installDeps(cwd) {
  await projectInstall({ cwd });
}

export default async function createProject({
  template,
  initializeGit,
  installDependencies,
  targetPath,
}) {
  const tasks = new Listr([
    {
      title: "Copying project files...",
      task: async () => {
        // try to get access to template files
        const templateDirPath = path.resolve(
          __dirname,
          "../templates",
          template
        );

        try {
          await access(templateDirPath, fs.constants.R_OK);
        } catch (err) {
          const moreDetails = new Error(err).message;
          throw new Error(
            `Wasn't able to access template files: ${moreDetails}`
          );
        }

        try {
          await copyTemplateFiles(templateDirPath, targetPath);
        } catch (err) {
          const moreDetails = new Error(err).message;
          throw new Error(`Wasn't able to copy project files: ${moreDetails}`);
        }
      },
    },
    {
      title: "Initialize git...",
      task: async () => {
        try {
          await initGit(targetPath);
        } catch (err) {
          const moreDetails = new Error(err).message;
          throw new Error(`Failed to initialize git: ${moreDetails}`);
        }
      },
      enabled: () => initializeGit,
    },
    {
      title: "Installing dependencies...",
      task: async () => {
        try {
          await installDeps(targetPath);
        } catch (err) {
          const moreDetails = new Error(err).message;
          throw new Error(`Failed to install dependencies: ${moreDetails}`);
        }
      },
      skip: () =>
        !installDependencies
          ? "Pass [-i,--install] to automatically install dependencies"
          : undefined,
    },
  ]);

  try {
    await tasks.run();

    const projectName = targetPath.split(path.sep).slice(-1).join("");
    logger.success(`Project ${chalk.bold(projectName)} is ready!`);
    logger.desc(`It was created under the path ${targetPath}`);

    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
}
