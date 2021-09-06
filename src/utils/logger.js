import chalk from "chalk";

const logger = {
  info(msg) {
    console.log(`${chalk.blue.bold(`[INFO]`)} ${msg}`);
  },
  success(msg) {
    console.log(`${chalk.green.bold(`[SUCCESS]`)} ${msg}`);
  },
  error(msg, err) {
    console.error(`${chalk.red.bold(`[ERROR]`)} ${msg} ${err || ""}`);
  },
  desc(msg) {
    console.log(chalk.gray(msg));
  },
};

export default logger;
